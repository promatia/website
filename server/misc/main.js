function gql() { }

class hasScope {
    async resolver({ fieldName, directiveArgs, user, next }) {
        let { HasScope } = directiveArgs;
        let scope = HasScope[0];

        if (user.HasScope(scope)) return await next();

        throw new Error(
            `User does not have scope: "${scope}" for field: ${fieldName}`
        );
    }

    introspector({ introspectorFields, directiveArgs }) {
        let { HasScope } = directiveArgs;
        let scope = HasScope[0];

        introspectorFields[
            "Requires Scope"
        ] = `This field requires scope: "${scope}"`;
    }
}


const x = {
    "User": {
        "inputs": {},
        "resolvers": [
            {
                "name": "contextUser",
                "args": {}
            }
        ],
        "fields": {
            "_id": {
                "args": {},
                "resolvers": [
                    {
                        "name": "ObjectID",
                        "args": {}
                    }
                ]
            },
            "firstName": {
                "args": {},
                "resolvers": [
                    {
                        "name": "hasScope",
                        "args": {
                            "scope": "updateProfile"
                        }
                    },
                    {
                        "name": "String",
                        "args": {}
                    }
                ]
            },
            "lastName": {
                "args": {},
                "resolvers": [
                    {
                        "name": "hasScope",
                        "args": {
                            "scope": "updateProfile"
                        }
                    },
                    {
                        "name": "String",
                        "args": {}
                    }
                ]
            },
            "fullName": {
                "args": {},
                "resolvers": [
                    {
                        "name": "hasScope",
                        "args": {
                            "scope": "updateProfile"
                        }
                    },
                    {
                        "name": "String",
                        "args": {}
                    },
                    {
                        "name": "deprecated",
                        "args": {
                            "reason": "Use firstName and lastName"
                        }
                    }
                ]
            },
            "friends": {
                "args": {},
                "resolvers": [
                    {
                        "name": [
                            "User"
                        ]
                    }
                ]
            }
        }
    }
}