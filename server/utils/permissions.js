import { ObjectId, ObjectID } from 'mongodb'

export const permissions = {
    'human-services.staff': {
        name: 'Human Services Powers',
        description: 'Gives permissions to manage all human services affairs',
        permissions: {
            'applications': {
                name: 'Applications',
                description: 'Gives permissions to manage all human services applications'
            }
        }
    },
    'human-services.staff.applications.view': {
        'name': 'Approve Application',
        'description': 'Users with this permission will have the ability to view citizenship applications'
    },
    'human-services.staff.applications.approve': {
        'name': 'Approve Application',
        'description': 'Users with this permission will have the ability to approve citizenship applications'
    },
    'human-services.staff.applications.deny': {
        'name': 'Deny Application',
        'description': 'Users with this permission will be able to deny citizenship applications'
    },
    'human-services.staff.applications.contact': {
        'name': 'Contact Applicant',
        'description': 'Users with this permission will be able to contact applicants via the chat interface'
    },
    'human-services.staff.users.view': {
        'name': 'View Users',
        'description': 'Users with this permission will be able to view all users'
    },
    'human-services.staff.users.delete': {
        'name': 'Delete User',
        'description': 'Users with this permission will be able to delete users without citizenship'
    },
    'human-services.staff.users.revokeCitizenship': {
        'name': 'Revoke Citizenship',
        'description': 'Users with this permission will be able to revoke citizenship of users with citizenship'
    },
    'human-services.staff.users.pinReferral': {
        'name': 'Pin Referral',
        'description': 'Users with this permission will be able to link a referral to another account attribute'
    },
    'human-services.staff.users.set-referrer': {
        'name': 'Pin Referral',
        'description': 'Users with this permission will be able to link a referral to another account attribute'
    },
    'human-services.staff.users.modify': {
        'name': 'Update Account Details',
        'description': 'Users with this permission will be able to update any users account details'
    },
    'human-services.staff.viewAuditLog': {
        'name': 'View Audit Log',
        'description': 'Users with this permission will be able to view human services audit logs'
    },
    'notifications.send': {
        'name': 'Send Notification',
        'description': 'Send notifications to users'
    },
    //sysop create roles
    //sysop assign badges
    //sysop assign special permissions
    //
    'access-control.sysop.assign': {

    }
}

export const groups = {
    
}


const organisation = {
    _id: new ObjectID,
    name: 'Co PTY LTD',
    users: [{
        id: new ObjectID,
        roles: [new ObjectID]
    }]
}

const body = {
    _id: new ObjectID,
    organisation: new ObjectID,
    roles: [new ObjectID],
    name: 'Board',
    type: 'seat'

}

const promaBank = {

}

const promaBankMonetaryCouncil = {
    roles: [new ObjectID('Monetary Council')]

}

const role = {
    _id: new ObjectID,
    organisation: new ObjectID,
    permissions: ['organisation.users.invite'],
    name: 'Recruiter',
    inherits: [new ObjectID]
}
