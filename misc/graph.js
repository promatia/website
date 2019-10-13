module.exports = function Graph(typedefs, resolvers, directives){
    const { messages, types } = parseUDL(typedefs)

    Object.assign(directives, typesToDirectives(types))

    console.log(messages)

    //throw error if no resolver for messages

    return async (messageQuery, context) => {
        let messagesQuery = parseMessage(messageQuery)

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

    

        messages

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
        let wants = {};
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
        return peek().type === "operator" && peek().value === type;
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

        while(true){
            if(isPunc('newline')){
                next()
                continue
            }
            if(isPunc(')')){
                next()
                break
            }
            if(isPunc('}')){
                next()
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

        return inputs
    }

    while (true) {
        if (peek() === null) break;
        if (isPunc('newline')) {
            next()
            continue
        }
        if(isOperator('message')){
            next()
            parseMessage()
            continue;
        }
        throw new Error('No operator match found')
    }

    return messages
}

function parseUDL(typedefs) {
    let { peek, next, eof, croak } = TokenStream(typedefs)
    let types = {}
    let messages = {}


    function getFields() {
        let fields = {};

        if(isPunc('{')){
            next()
            while(!isPunc('}')){
                if(isPunc('newline')) {
                    next()
                    continue
                }
                
                fields[next().value] = {
                    args: getArgs(),
                    resolvers: getResolvers()
                }
            }
            next()
        }

        return fields;
    }

    function isVar() {
        return peek().type === "var";
    }

    function getArgs() {
        let args = {};
        if (isPunc('(')) {
            next();
            while (!isPunc(')')) {
                let { name, value } = getArg();
                args[name] = value;
            }
            next();
        }

        return args;
    }

    function getArg() {
        if (!isVar()) {
            throw new Error("Argument name is not valid");
        }
        
        let name = next().value;
        
        return {
            name,
            value: next().value
        };
    }

    function isPunc(type){
        return peek().type === 'punc' && peek().value === type
    }

    function getResolvers() {
        let resolvers = [];
        while (!isPunc('newline')) {
            
            if(isPunc('{')){
                break
            }
            if(isPunc('[')){
                next()
                resolvers.push({name: [next().value]})
                if(!isPunc(']')) croak(`Array not closed ']`)
                next()
                continue
            }
            if(isVar()) {
                let token = next();
                resolvers.push({name: token.value, args: getArgs()})
            }
        }
        

        return resolvers;
    }

    function generateType() {
        let token = next();
        types[token.value] = {
            resolvers: getResolvers(),
            fields: getFields()
        };
    }

    function isOperator(type) {
        return peek().type === "operator" && peek().value === type;
    }

    function parseMessage(){
        let token = next()
        messages[token.value] = {
            inputs: getInputs(),
            resolvers: getResolvers()
        }
    }

    function getInputs(){
        let inputs = {}

        if(isPunc('(')){
            next()
            while(!isPunc(')')){
                if(peek().type === 'punc' && peek().value === 'newline'){
                    next()
                    continue
                }
                let token = next()
                inputs[token.value] = getResolvers()
            }
            next()
        }
        return inputs
    }

    while (true) {
        if (peek() === null) break;
        if (isPunc('newline')) {
            next()
            continue
        }
        if (isOperator('type')) {
            next();
            generateType();
            continue;
        }
        if(isOperator('message')){
            next()
            parseMessage()
            continue;
        }
        throw new Error('No operator match found')
    }

    return {
        types,
        messages
    }
}


function InputStream(input) {
    var pos = 0,
        line = 1,
        col = 0;
    return {
        next: next,
        peek: peek,
        eof: eof,
        croak: croak
    };
    function next() {
        var ch = input.charAt(pos++);
        if (ch == "\n") line++ , (col = 0);
        else col++;
        return ch;
    }
    function peek() {
        return input.charAt(pos);
    }
    function eof() {
        return peek() == "";
    }
    function croak(msg) {
        throw new Error(msg + " (" + line + ":" + col + ")");
    }
}

function TokenStream(typedefs) {
    let input = InputStream(typedefs)
    var current = null;
    var operators = ['type', 'message', 'subscription']
    return {
        next: next,
        peek: peek,
        eof: eof,
        croak: input.croak
    };
    function is_operator(operator){
        return operators.indexOf(operator) >= 0
    }
    function is_digit(ch) {
        return /[0-9]/i.test(ch);
    }
    function is_id_start(ch) {
        return /[a-z_]/i.test(ch);
    }
    function is_id(ch) {
        return is_id_start(ch) || "0123456789".indexOf(ch) >= 0;
    }
    function is_punc(ch) {
        return "[]{}!.:,()".indexOf(ch) >= 0;
    }
    function is_whitespace(ch) {
        return " \t".indexOf(ch) >= 0;
    }
    function read_while(predicate) {
        var str = "";
        while (!input.eof() && predicate(input.peek())) str += input.next();
        return str;
    }
    function read_number() {
        var has_dot = false;
        var number = read_while(function (ch) {
            if (ch == ".") {
                if (has_dot) return false;
                has_dot = true;
                return true;
            }
            return is_digit(ch);
        });
        return { type: "num", value: parseFloat(number) };
    }
    function read_ident() {
        var id = read_while(is_id);
        return {
            type: is_operator(id) ? 'operator' : "var",
            value: id
        };
    }
    function read_escaped(end) {
        var escaped = false,
            str = "";
        input.next();
        while (!input.eof()) {
            var ch = input.next();
            if (escaped) {
                str += ch;
                escaped = false;
            } else if (ch === "\\") {
                escaped = true;
            } else if (ch === end) {
                break;
            } else {
                str += ch;
            }
        }
        return str;
    }
    function read_string() {
        return { type: "str", value: read_escaped('"') };
    }
    function skip_comment() {
        read_while(function (ch) {
            return ch !== "\n";
        });
        input.next();
    }
    function read_newline() {
        read_while(function (ch) {
            return ch === "\n";
        });

        return { type: "punc", value: "newline" };
    }
    function read_next() {
        read_while(is_whitespace);
        if (input.eof()) return null;
        var ch = input.peek();
        if (ch === "#") {
            skip_comment();
            return read_next();
        }
        if (ch === '"') return read_string();
        if (ch === "\n") return read_newline();
        if (is_digit(ch)) return read_number();
        if (is_id_start(ch)) return read_ident();
        if (is_punc(ch))
            return {
                type: "punc",
                value: input.next()
            };
        input.croak("Can't handle character: " + ch);
    }
    function peek() {
        return current || (current = read_next());
    }
    function next() {
        var tok = current;
        current = null;
        return tok || read_next();
    }
    function eof() {
        return peek() == null;
    }
}