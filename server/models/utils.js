
import { Scalar, Directive } from '@promatia/prograph'
import mongodb from 'mongodb'

const { ObjectID } = mongodb

export const directiveResolvers = {
    hasScope: Directive,
    authenticated: class Authenticated extends Directive {
        isAuthenticated (context) {
            if(!context.state.user) throw new Error('You are not authenticated, please sign in')
        }

        async inputVisitor ({value, context}) {
            this.isAuthenticated(context)
            return value
        }

        async fieldVisitor ({value, context}) {
            this.isAuthenticated(context)
            return await value()
        }
    },
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
