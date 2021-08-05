/* fakes user para logon*/
export const fakesUsersLogon = [
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

/* fakes user para recover*/
export const fakesUsersRecover = [
    {
        email: 'recover@example.com',
        response:{
            "response": "Ok",
        }
    }
]


const findUser =(email,fakesUsers)=>{
    return fakesUsers.find(user => user.email===email).response
}
export const findUserByEmailLogon = ({email}) =>{
    return findUser(email,fakesUsersLogon)
}

export const findUserByEmailRecover=({email})=>{
    return findUser(email,fakesUsersRecover)
}
