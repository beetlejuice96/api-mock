export const fakesUsers = [
    {
        email: 'ok@example.com',
        response:{
            "response": "Ok",
            "token": "stringstringstringstringstringstringstringstr"
        }
    },
    {
        email: "2fa@example.com",
        response:{
            response: "2AF",
            "2fa-data": "pariaturaadipisicingsuntaexerc"
        }
    },
    {
        email: "nonValidated@example.com",
        response:{
            response: "NonValidated"
        }
    },
    {
        email: "bloqued@example.com",
        response:{
            response: "Blocked"
        }
    },
    {
        email: "CantLogon@example.com",
        response:{
            response: "CantLogon"
        }
    },
    {
        email:"NextBlock@example.com",
        response:{
            response: "NextBlock"
        }
    },
    {
        email: "LoginIncorrect@example.com",
        response:{
            response: "LoginIncorrect"
        }
    }
]

export const findUserByEmail = ({email}) =>{
    return fakesUsers.find(user => user.email===email).response
}
