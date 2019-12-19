
import { Scalar, Directive } from '@promatia/prograph'
import mongodb from 'mongodb'

const { ObjectID } = mongodb

export const directiveResolvers = {
    hasScope: Directive,
    isAuthenticated: Directive,
    lowercase: class Lowercase extends Directive {
        async inputVisitor ({value}) {
            return value.toLowerCase()
        }
        
        async fieldVisitor ({value}) {
            return (await value()).toLowerCase()
        }
    },
    max: class Max extends Directive {
        async inputVisitor ({value, args}) {
            if(value > args.amount.value) throw new Error(`Input: ${value} exceeds max: ${args.amount.value}`)
            return value
        }
    }
}

export const scalarResolvers = {
    ObjectID: class extends Scalar {
        async incoming ({value}) {
            return new ObjectID(value)
        }

        async outgoing (value) {
            return String(value)
        }
    },
    Date: class extends Scalar {
        async incoming ({value}) {
            return new Date(value)
        }

        async outgoing (value) {
            return Number(value)
        }
    },
    Void: class Void extends Scalar {
        async outgoing () {
            return null
        }
    }
}
