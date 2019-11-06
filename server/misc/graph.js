
const queryParser = require('./queryParser')
const schemaParser = require('./schemaParser')

function Graph({schema, messageResolvers, directiveResolvers, scalarResolvers}){
    const {
        types,
        scalarTypes,
        subscriptions,
        messages,
        directives,
        paginators
    } = schemaParser(schema)

    console.log(types.User.fields.roles)
    
    function getValue(value){
        if(scalarTypes.indexOf(value) !== 0){
            return {
                type: 'scalar',
                value: value
            }
        }
        if(Object.keys(types).indexOf(value) !== 0){
            return {
                type: 'type',
                value: types[value]
            }
        }
    }

    for(let typeName in types){
        let type = types[typeName]
        for(let fieldName in type.fields){
            let field = type.fields[fieldName]
            
            //replace spread operators in field args
            for(let argName in field.args){
                let arg = field.args[argName]
                if(arg === 'spread'){
                    delete field.args[argName]
                    Object.assign(field.args, types[argName].fields)
                }
            }

            if(field.type === 'paginator'){
                type.fields[fieldName] = {
                    args: field.args,
                    type: {
                        items: {
                            type: 'array',
                            value: getValue(field.value)
                        },
                        ...paginators[field.paginator].fields
                    }
                }
                continue
            }
            console.log(field.type)
            if(field.type === ''){}
        }
    }

    //match resolvers with tree, directives with resolvers, etc

    return async (queryString) => {
        let queryTree = queryParser(queryString)
    }

    //throw error if no resolver for messages

    return async (messageQuery, context) => {
        //parse messages
        //parse input tree
        //parse primitives & objects/arrays
        let messagesQuery = parseMessageQuery()
        return

        for(let name in messagesQuery){
            let group = {
                Message: messagesQuery[name],
                MessageType: messages[name],
                resolver: resolvers[name]
            }

            let userProvidedInputs = group.Message.inputs
            let typeProvidedInputs = group.MessageType.inputs
            let filteredInputs = filterInputs(userProvidedInputs, typeProvidedInputs)
            

            /**
             * FOR MESSAGES
             * Filter inputs
             * Get all inputs directive resolvers
             * Call directive resolvers
             * When all directive resolvers are called:
             * call the resolver with inputs if no errors
             * 
             * FOR FIELDS
             * Get all wants
             * Filter wants
             * Call resolvers of wants
             * Call resolver
             * Resolve return wants
             * Bubble up result
             * Return result
             * 
             * INPUT VALUES DIRECTIVE ARGS
             * - inputValue
             * - next
             * - fieldName
             * - inputs
             * - directiveArgs
             * - context
             * 
             * FIELD VALUE DIRECTIVE ARGS
             * - fieldsWanted
             * - fieldName
             * - directiveArgs
             * - value()<Promise>
             * - context
             * - inputArgs
             * 
             * TYPE VALUE DIRECTIVE ARGS
             * - fieldsWanted
             * - next
             * - context
             */

            

            function resolver(){
                //filter type-provided fields from user-provided fields
                //return resolver
                //return only what is in 'wants'
                //check for 'wants' mismatch/object type (should be done by resolvers)
            }
        }
    }
}

function typesToDirectives(types){
    let directives = {}


    /**
     * Get type
     * Create directive class
     * validate if want is a object/array
     * filter want types vs fields
     * Check types, link wants to subtype resolvers
     * wrap type (wrap each object in array)
     */


    for(let name in types){
        directives[name] = class {
            introspector(){

            }
        }
    }

    return types
}

function filterInputs(userProvidedInputs, typeProvidedInputs){
    let filtered = {}

    for(let name in typeProvidedInputs) {
        if(userProvidedInputs[name] && typeProvidedInputs[name]){
            if(typeof typeProvidedInputs[name])
            filtered[name] = userProvidedInputs[name]
        }
    }

    return filtered
}

function parseMessage(message){
    let { peek, next, eof, croak } = TokenStream(message)

    let messages = {}

    function isVar() {
        return peek().type === "var";
    }

    function isPunc(type){
        return peek().type === 'punc' && peek().value === type
    }

    function getWants() {
        let wants = {}
        while (true) {
            if(isPunc('newline')){
                next()
                continue
            }
            
            if(isPunc('{')){
                next()
                continue
            }
            
            if(isPunc('}')){
                next()
                break
            }

            if(isVar()) {
                let name = next().value
                if(isPunc('{')){
                    wants[name] = getWants()
                }else{
                    wants[name] = true
                }
            }
        }

        return wants;
    }

    function isOperator(type) {
        return peek().type === "operator" && peek().value === type
    }

    function parseMessage(){
        let token = next()
        messages[token.value] = {
            inputs: getInputs(),
            wants: getWants()
        }
        
    }


    function getInputs(){
        let inputs = {}

        next()

        while(!isPunc(')')){
            if(isPunc('newline')){
                next()
                continue
            }
            if(isPunc(')')){
                break
            }
            if(isVar()){
                let name = next().value
                
                if(isPunc('{')){
                    inputs[name] = getInputs()
                }else{
                    inputs[name] = next().value
                }
            }
        }

        next()

        return inputs
    }
}

module.exports = Graph