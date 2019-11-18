
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


/**
 * 
 * @param {*} GDLString 
 */
function tokenizer(GDLString) {
    let input = InputStream(GDLString)
    var current = null
    var operators = [
        'scalar',
        'paginator',
        'directive',
        'type',
        'message',
        'subscription'
    ]

    return {
        next: next,
        peek: peek,
        eof: eof,
        croak: input.croak
    };
    function is_operator(operator){
        return operators.indexOf(operator) >= 0
    }
    function is_boolean(boolean){
        return ['true', 'false'].indexOf(boolean) >= 0
    }
    function is_digit(ch) {
        return /[0-9]/i.test(ch)
    }
    function is_id_start(ch) {
        return /[a-z_]/i.test(ch)
    }
    function is_id(ch) {
        return is_id_start(ch) || "0123456789".indexOf(ch) >= 0
    }
    function is_punc(ch) {
        return "[]{}!.:,()=".indexOf(ch) >= 0
    }
    function is_whitespace(ch) {
        return " \t".indexOf(ch) >= 0
    }
    function is_directive_start(ch){
        return ch === "@"
    }
    function is_spread(ch){
        return ch === "."
    }
    function read_while(predicate) {
        var str = ""
        while (!input.eof() && predicate(input.peek())) str += input.next()
        return str
    }
    function read_number() {
        var has_dot = false;
        var number = read_while(function (ch) {
            if (ch == ".") {
                if (has_dot) return false;
                has_dot = true
                return true
            }
            return is_digit(ch)
        });
        return { type: "num", value: parseFloat(number) }
    }
    function read_ident() {
        var value = read_while(is_id);
        if(is_operator(value)){
            return {
                type: 'operator',
                value
            }
        }
        if(is_boolean(value)){
            value = value === "true" ? true : false
            return {
                type: "boolean",
                value
            }
        }
        return {
            type: 'var',
            value: value
        }
    }
    function read_escaped(end) {
        var escaped = false,
            str = ""
        input.next()
        while (!input.eof()) {
            var ch = input.next()
            if (escaped) {
                str += ch
                escaped = false
            } else if (ch === "\\") {
                escaped = true
            } else if (ch === end) {
                break
            } else {
                str += ch
            }
        }
        return str
    }
    function read_string() {
        return { type: "str", value: read_escaped('"') }
    }
    function skip_comment() {
        read_while(function (ch) {
            return ch !== "\n"
        });
        input.next()
    }
    function read_directive(){
        read_while(is_directive_start)
        let id = read_while(is_id)
        return {
            type: "directive",
            value: id
        };
    }
    function read_spread(){
        let amount = 0
        let spread = read_while(function(ch){
            if(ch === '.'){
                amount++
                return true
            }
        })

        if(amount !== 3) input.croat('Spread operators must have 3 periods (...)')

        return {
            type: 'punc',
            value: spread
        }
    }
    function read_newline() {
        read_while(function (ch) {
            return ch === "\n"
        });

        return { type: "punc", value: "newline" }
    }
    function read_next() {
        read_while(is_whitespace)
        if (input.eof()) return null;
        var ch = input.peek();
        if (ch === "#") {
            skip_comment()
            return read_next()
        }
        if (ch === '"') return read_string()
        if (ch === "\n") return read_newline()
        if (is_digit(ch)) return read_number()
        if (is_id_start(ch)) return read_ident()
        if (is_spread(ch)) return read_spread()
        if (is_directive_start(ch)) return read_directive()
        if (is_punc(ch))
            return {
                type: "punc",
                value: input.next()
            };
        input.croak("Can't handle character: " + ch)
    }
    function peek() {
        return current || (current = read_next())
    }
    function next() {
        var tok = current
        current = null
        return tok || read_next()
    }
    function eof() {
        return peek() == null
    }
}

module.exports = tokenizer