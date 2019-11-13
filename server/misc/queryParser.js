const tokenizer = require('./tokenizer')

module.exports = (queryString) => {
    let { peek, next, eof, croak } = tokenizer(queryString)

    let messages = []

    function delimited(start, stop, path, parser){
        if(!isPunc(start)) return
        next()
        while(!isPunc(stop)){
            if(isNextItem()){
                next()
                continue
            }
            parser()
        }
        return next()
    }

    function join(path, item){
        return path + '.' + item
    }

    function parseWants(path) {
        let fields = {}

        delimited('{', '}', path, ()=>{
            let field = next().value
            fields[field] = {
                args: getArgs(join(path, field))
            }
            let wants = parseWants(join(path, field))
            if(wants){
                fields[field].wants = wants
            }
        })

        if(Object.keys(fields).length === 0) return

        return fields;
    }

    function isVar() {
        return peek().type === "var";
    }

    function isObject(){
        return peek().type === "punc" && peek().value === "{"
    }

    function getArgs(path) {
        let args = {};

        delimited('(', ')', path, () => {
            let { name, token } = getArg(path)
            args[name] = token
        })

        return args;
    }

    function getArg() {
        if(isPunc('...')){
            next()

            return {
                name: next().value,
                token: 'spread'
            }
        }
        if (!isVar()) {
            croak(`Argument name is not valid ${peek().value}`);
        }
        
        let name = next().value;
        if(!isPunc(':')) croak("No separator provided")
        next()
    
        let token = next()
        
        return {
            name,
            token
        }
    }

    function isPunc(type){
        return peek().type === 'punc' && peek().value === type
    }

    function isPrimitive(){
        let type = peek().type
        return type === "num" || type === "str" || type == "boolean"
    }

    //Possible types
    //  Number, String, Boolean - Primitive
    //  Type - Type
    //  [Type] - Array of Type
    //  Paginator[Type] - Paginated Data
    //  nullable
    function parseValue(field){
        if(isPrimitive()){ //parse primitive
            return next().value
            
        }
        if(isObject()){
            return parseInputs(field)
        }
        croak(`${peek().type} ${peek().value} is not a valid field value`)
    }

    function isOperator(type) {
        return peek().type === "operator" && peek().value === type;
    }

    function isNextItem(){
        return isPunc('newline') || isPunc(',')
    }

    function parseInputs(path){
        let inputs = {}

        delimited('{', '}', path, ()=>{
            let field = next().value

            if(!isPunc(':')) croak(`No separator for ${join(path, field)} provided`)
            next()

            inputs[field] = parseValue(join(path, field))
        })

        return inputs
    }

    function parseInputFields(path){
        let inputs = {}

        delimited('(', ')', path, ()=>{
            let field = next().value

            if(!isPunc(':')) croak(`No separator for ${join(path, field)} provided`)
            next()

            inputs[field] = parseValue(join(path, field))
        })

        return inputs
    }

    function parseMessage(){
        let name = next().value
        let inputs = parseInputFields(name)
        let wants = parseWants(name)

        messages.push({
            name,
            inputs,
            wants
        })
    }

    function traverse(){
        if (isNextItem()) {
            return next()
        }

        if(isOperator('message')){
            next()
            parseMessage()
        }
    }

    while (!eof()) {
        traverse()
    }

    return messages
}