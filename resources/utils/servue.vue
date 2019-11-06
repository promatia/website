<script>
const unaryTags = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]

function renderStartTag(VNode) {
    let html = `<${VNode.tag}`

    if (VNode.data) {
        if (VNode.data.attrs) {
            let attr = VNode.data.attrs
            for (let name in attr) {
                if (attr[name] === "") {
                    html += ` ${name}`
                } else {
                    html += ` ${name}="${attr[name]}"`
                }
            }
        }
    }

    return html + ">";
}

function isUnaryTag(VNode) {
    return unaryTags.indexOf(VNode.tag) > -1
}

function getFullTag(VNode) {
    if (!VNode.tag) return VNode.text

    let html = renderStartTag(VNode)

    if (VNode.children) {
        html += getChildren(VNode)
    }
    if (!isUnaryTag(VNode)) {
        html += `</${VNode.tag}>`
    }
    return html;
}

function getChildren(VNode) {
    let html = ""
    for (let i in VNode.children) {
        let child = VNode.children[i]
        html += getFullTag(child)
    }
    return html
}

let firstRender = false

export default {
    created() {
        let VNodes = this.$slots.head
        let renderedHead = ""

        for (let i in VNodes) {
            let VNode = VNodes[i];
            renderedHead += getFullTag(VNode)
        }

        if (this.$isServer) {
            this.$ssrContext.head = `<meta name="vueservestart">${renderedHead}<meta name="vueserveend">`
        }else if(firstRender){
            let head = document.head
            let startNodeFound = false
            let endNodeFound = false

            let children = Array.from(head.childNodes)

            for(let node of children){
                if(node.name === "vueservestart"){
                    startNodeFound = true
                    head.removeChild(node)
                    continue
                }
                if(node.name === "vueserveend"){
                    endNodeFound = true
                    head.removeChild(node)
                    break
                }
                if(startNodeFound){
                    head.removeChild(node)
                }
            }

            head.firstElementChild.insertAdjacentHTML('beforebegin', `<meta name="vueservestart">${renderedHead}<meta name="vueserveend">`)
        }
        firstRender = true
    },
    render(h){
        return h('div', { class: "servue-wrapper", }, this.$slots.body)
    }
};
</script>