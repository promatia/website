class Directive {
    readInput(){

    }

    fieldVisitor()


    send(){
        
    }
}

class Scalar {
    incoming(value){
        
    }

    outgoing(value){

    }
}

class String {
    async incoming(value){
        if(typeof value === 'string'){
            return value
        }
        try {
            return value.toString()
        } catch (error) {
            throw new Error(`Cannot turn value into string: ${value}`)
        }
    }
    async outgoing(value){
        if(typeof value === 'string'){
            return value
        }
        try {
            return value.toString()
        } catch (error) {
            throw new Error(`Cannot turn value into string: ${value}`)
        }
    }
}

class Number {
    async incoming(value){
        if(typeof value === 'number'){
            return value
        }
        throw new Error(`Value is not a number: ${value}`)
    }
    async outgoing(value){
        if(typeof value === 'number'){
            return value
        }
        throw new Error(`Value is not a number: ${value}`)
    }
}

class Boolean {
    async incoming(value){
        if(typeof value === 'boolean'){
            return value
        }
        throw new Error(`Value is not boolean: ${value}`)
    }
    async outgoing(value){
        if(typeof value === 'boolean'){
            return value
        }
        throw new Error(`Value is not boolean: ${value}`)
    }
}