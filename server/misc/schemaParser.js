const tokenizer = require('./tokenizer')

function schemaParser(typedefs) {
    let { peek, next, eof, croak } = tokenizer(typedefs)

    let scalarTypes = []
    let directives = {}
    let paginators = {}
    let subscriptions = {}
    let types = {}
    let messages = {}

    function delimited(start, stop, isNextItem, parser){
        if(!isPunc(start)) return
        next()
        while(!isPunc(stop)){
            if(isNextItem()){
                next()
                if(isNextItem()) croak(`multiple seperators provided`)
                continue
            }
            parser()
        }
        if(isPunc(stop)) return next()
        croak(`expected: "${punc}", got: "${peek().value}"`)
    }

    function getFields(parent) {
        let fields = {};

        delimited('{', '}', isNextItem, () => {
            let fieldName = next().value
            let args = getArgs()
            if(!isPunc(':')) croak(`No separator for ${parent}.${fieldName} provided`)
            next()
            let type = parseFieldValue(fieldName)
            let directives = getDirectives(fieldName)

            fields[fieldName] = {
                args,
                ...type,
                directives
            }
        })

        return fields;
    }

    function isVar() {
        return peek().type === "var";
    }

    function getArgs() {
        let args = {};

        delimited('(', ')', isNextItem, () => {
            let { name, token } = getArg()
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

    function isDirective(){
        return peek().type === "directive"
    }

    function getDirectives(parent) {
        let directives = [];
        while (isDirective()) {
            let name = next().value

            directives.push({
                name,
                args: getArgs(name)
            })
        }

        return directives
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
    function parseFieldValue(parent){
        if(isPrimitive()){ //parse primitive
            let value = next().value
            return {
                type: "primitive",
                value,
            }
        }
        if(isPunc('[')){ //parse array type
            next()
            if(isVar()){
                let value = next().value
                if(!isPunc(']')) croak(`No closing "]" provided for ${parent}.${value}`)
                next()
                return {
                    type: "array",
                    value
                }
            }
            croak(`No valid type provided for ${parent}: Type: "${peek().type}", Value: "${peek().value}"`)
        }
        if(isVar()){
            let value = next().value
            if(isPunc('[')){ // paginator value
                next()
                if(isVar()){
                    let paginatorType = next().value
                    if(!isPunc(']')) croak(`Paginator must only have one type, expected ], got: ${peek().value}`)
                    next()
                    return {
                        type: "paginator",
                        paginator: value,
                        value: paginatorType
                    }
                }
                croak(`${peek().value} is not a valid paginator type`)
            }
            return {
                type: 'type',
                value
            }
        }
        croak(`${peek().type} ${peek().value} is not a valid field value`)
    }

    function isOperator(type) {
        return peek().type === "operator" && peek().value === type;
    }

    function getVisitors(){
        let visitors = []
        if(isVar()){
            while(isVar()){
                visitors.push(next().value)
            }
            return visitors
        }
        croak('Directives must provide at least one directive visitor (INPUT, FIELD, OBJECT)')
    }

    function isNextItem(){
        return isPunc('newline') || isPunc(',')
    }

    function getInputFields(parent){
        let inputs = {}

        if(isPunc('(')){
            next()
            while(!isPunc(')')){
                if(isNextItem()){
                    next()
                    continue
                }

                let fieldName = next().value
                if(!isPunc(':')) croak(`No separator for ${parent}.${fieldName} provided`)
                next()
                let type = parseFieldValue(fieldName)
                let directives = getDirectives(fieldName)

                inputs[fieldName] = {
                    ...type,
                    directives
                }
            }
            next()
        }

        return inputs
    }

    function parseDirective(){
        if(!isVar()) croak(`Directive name not provided`)
        directives[next().value] = {
            args: getArgs(),
            visitors: getVisitors()
        }
    }

    function parsePaginator(){
        let name = next().value
        paginators[name] = {
            fields: getFields(name)
        }
    }

    function parseMessage(){
        let fieldName = next().value
        let inputs = getInputFields(fieldName)
        if(!isPunc(':')) croak(`No separator for ${parent}.${fieldName} provided`)
        next()
        let type = parseFieldValue(fieldName)
        let directives = getDirectives(fieldName)

        messages[fieldName] = {
            inputs,
            ...type,
            directives
        }
    }

    function parseType() {
        let fieldName = next().value
        types[fieldName] = {
            fields: getFields(fieldName),
            directives: getDirectives(fieldName),
        }
    }

    function traverse(){
        if (isNextItem()) {
            return next()
        }

        if (isOperator('type')) {
            next();
            return parseType();
        }
        if(isOperator('message')){
            next()
            return parseMessage()
        }
        if(isOperator('scalar')){
            next()

            if(isVar()){
                return scalarTypes.push(next().value)
            }
            croak('No scalar type provided')
        }
        if(isOperator('directive')){
            next()
            if(isVar()){
                return parseDirective()
            }
            croak('No directive name provided')
        }
        if(isOperator('paginator')){
            next()
            if(isVar()){
                return parsePaginator()
            }
            croak('No paginator name provided')
        }
        //todo: subscription
        croak(`No valid operator match, found: "${peek().value}"`)
    }

    while (!eof()) {
        traverse()
    }

    return {
        messages,
        scalarTypes,
        directives,
        types,
        paginators,
        subscriptions
    }
}

module.exports = schemaParser