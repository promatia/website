
const queryParser = require('./queryParser')
const schemaParser = require('./schemaParser')

function Graph({
    schema,
    messageResolvers,
    directiveResolvers,
    scalarResolvers,
    defaultCost = 0
}){
    schema += `
    scalar Number
    scalar String
    scalar Boolean
    
    directive cost(
        cost: Number
        multiplyParent: Boolean
        multipliers: [String]
    ) INPUT FIELD OBJECT
    directive deprecated(reason: String) INPUT FIELD OBJECT
    ${schema}`
    const {
        types,
        scalarTypes,
        subscriptions,
        messages,
        directives,
        paginators
    } = schemaParser(schema)

    scalarTypes.push('Number', 'String', 'Boolean')
    
    function getType(value){
        if(scalarTypes.includes(value)){
            return {
                type: 'scalar',
                scalar: value,
                value: value
            }
        }

        if(Object.keys(types).includes(value)){
            return {
                type: 'type',
                fields: types[value].fields
            }
        }

        throw new Error(value + ' is not a valid type')
    }

    function expandField(field){
        //replace spread operators in field args
        for(let argName in field.args){
            let arg = field.args[argName]
            if(arg === 'spread'){
                delete field.args[argName]
                Object.assign(field.args, types[argName].fields)
            }
        }

        //expand paginators into full output type
        if(field.type === 'paginator'){
            field.fields = {
                items: {
                    type: 'array',
                    array: {...getType(field.paginator), nullable: field.nullableArrayItem},
                    nullable: field.nullable
                },
                ...paginators[field.value].fields
            }
        }
        
        //assign expanded type to field
        if(field.type === 'type'){
            Object.assign(field, getType(field.value))
        }

        //expand array
        if(field.type === 'array'){
            field.array = getType(field.value)
        }
    }

    let mergedArrays = {...types, ...paginators}

    //expand types recursively (circularly)
    for(let name in mergedArrays){
        let type = mergedArrays[name]
        for(let fieldName in type.fields){
            expandField(type.fields[fieldName])
        }
    }

    let mergedMessageTypes = {...paginators, ...subscriptions, ...messages}

    for(let name in mergedMessageTypes){
        let message = mergedMessageTypes[name]
        Object.assign(message, expandField(message))
        for(let inputName in message.inputs){
            expandField(message.inputs[inputName])
        }
    }

    //check for missing & unrecognised message resolvers
    //check for missing & unrecognised scalar resolvers
    //check for missing & unrecognised directive resolvers

    function CheckForUnrecognisedInputs(inputs, schemaInputs, parentPath) {
        for(let name in inputs){
            let path = `${parentPath}.${name}`
            let input = inputs[name]
            let schema = schemaInputs[name]
            if(!schema) throw new Error(`Unrecognised item ${path}`)
            if(schema.type === 'type'){
                if(input.constructor !== Object) throw new Error(`Input ${path} is not type ${schema.value}`)
                CheckForUnrecognisedInputs(input, schema.fields, path)
            }
            if(schema.type === 'array'){
                if(input.constructor !== Array) throw new Error(`Input ${path} is not type [${schema.value}]`)
                for(let i in input){ //validate each item in array
                    if(schema.array.type === 'type'){
                        CheckForUnrecognisedInputs(input[i], schema.array.fields, `${path}.${i}`)
                        continue
                    }else{
                        CheckForUnrecognisedInputs(input[i], {[i]: schema.array}, `${path}.${i}`)
                        continue
                    }
                }
            }
        }
    }

    function CheckForMissingInputs(inputs, schema, parentPath){
        for(let name in schema){
            if(schema[name].nullable !== true){
                let path = `${parentPath}.${name}`
                let input = inputs[name]
                if(!input) throw new Error(`Missing field in ${path}`)
                if(schema.type === 'type'){ // check for missing inputs in type (object)
                    CheckForMissingInputs(input, schema.fields, path)
                }
                if(schema.type === 'array'){
                    for(let i in input){ //check for missing types in array items
                        if(schema.array.type === 'type'){
                            CheckForMissingInputs(input[i], schema.array.fields, `${path}.${i}`)
                        }else{
                            CheckForMissingInputs(input[i], {[i]: schema.array}, `${path}.${i}`)
                        }
                    }
                }
            }
        }
    }

    function CheckForUnrecognisedWants(wants, schema, parentPath){
        for(let name in wants){
            let want = wants[name]
            let fieldSchema = schema[name]
            let path = `${parentPath}.${name}`
            if(!fieldSchema) throw new Error(`No such field ${path}`)
            if(fieldSchema.fields || (fieldSchema.array && fieldSchema.array.fields)) {
                let fields = fieldSchema.fields || fieldSchema.array.fields
                console.log(fields)
                if(!want.wants) throw new Error(`No wants provided for ${path}`)
                CheckForUnrecognisedWants(want.wants, fields)
            }
        }
    }

    function compareItems(queryTree){
        for(let i in queryTree){
            let name = queryTree[i].name
            let messageSchema = mergedMessageTypes[name]
            if(!messageSchema) throw new Error(`No recognised message type: ${name}`)
            
            CheckForUnrecognisedInputs(queryTree[i].inputs, messageSchema.inputs, name)
            CheckForMissingInputs(queryTree[i].inputs, messageSchema.inputs, name)
            CheckForUnrecognisedWants(queryTree[i].wants, messageSchema.fields, name)
            //ValidateInputs
        }
    }

    function checkNested(obj, current, ...levels) {
        if (obj === undefined) return false
        if (obj.constructor !== Object && levels.length === 0) return false
        if (levels.length == 0 && obj.hasOwnProperty(current)) return true
        return checkNested(obj[current], ...levels)
    }

    function getSchemaCost(schema, input, parentCost = 1){
        let directives = schema.directives
        let totalCost = 0

        for(let i in directives){
            let directive = directives[i]
            if(directive.name === 'cost'){
                let args = directive.args
                let cost = args.cost ? args.cost.value : 1
                let multiplyParent = args.multiplyParent || false
                let usedMultipliers = 1
                if(args.multipliers){
                    args.multipliers.value.map(multiplier => {
                        let splitMultiplier = multiplier.split('.')
                        if(checkNested(input, ...splitMultiplier)) usedMultipliers++
                    })
                }
                totalCost += (usedMultipliers * cost) * (multiplyParent ? parentCost : 1)
            }
        }

        if(totalCost === 0) totalCost += defaultCost

        return totalCost
    }
    

    function getInputCosts(messageSchema, inputs, parentCost, increaseCost){
        for(let name in inputs){
            let schema = messageSchema[name]
            increaseCost(getSchemaCost(schema, inputs[name], parentCost))
            if(schema.type === 'type'){
                getInputCosts(schema.fields, inputs[name], parentCost, increaseCost)
            }
        }
    }

    function getWantsCosts(messageSchema, wants, parentCost, increaseCost){
        for(let name in wants){
            let schema = messageSchema[name]
            increaseCost(getSchemaCost(schema, wants[name], parentCost))
            if(schema.type === 'type'){
                getInputCosts(schema.fields, wants[name].args, parentCost, increaseCost)
                getWantsCosts(schema.fields, wants[name].wants, parentCost, increaseCost)
            }
        }
    }

    function doCostAnalysis(queryTree, max){
        let cost = 0

        function increaseCost(amount){
            let update = cost + amount
            if(update > max) throw new Error(`Query failed cost exceeded max limit: ${max}`)
            cost = update
        }

        for(let i in queryTree){
            let queryItem = queryTree[i]
            let name = queryItem.name
            let messageSchema = mergedMessageTypes[name]
            let parentCost = getSchemaCost(messageSchema, queryItem)
            increaseCost(parentCost)
            getInputCosts(messageSchema.inputs, queryItem.inputs, parentCost, increaseCost)
            if(messageSchema.fields){
                getWantsCosts(messageSchema.fields, queryItem.wants, parentCost, increaseCost)
            }
        }

        return cost
    }

    //match resolvers with tree, directives with resolvers, etc

    return async (queryString, { context = {}, max = 1000} = {}) => {
        let queryTree = queryParser(queryString)

        compareItems(queryTree)
        doCostAnalysis(queryTree, max)

        //do typechecking on inputs
        //call message resolver for values
        //call want directives and await results before returning values
        //recursively await nested results before bubbling results


        //parse each message asynchronously in order
    }

    //throw error if no resolver for messages

    /**
     * FOR MESSAGES
     * Filter inputs
     * Get all inputs directive resolvers
     * Call directive resolvers
     * When all directive resolvers are called:
     * call the resolver with inputs if no errors
     * Return only what is wanted
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
}

module.exports = Graph