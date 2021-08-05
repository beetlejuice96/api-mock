/* fakes user para logon*/
const fakesUsersLogon = [
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
const fakesUsersRecover = [
    {
        email: 'recover@example.com',
        response:{
            response: "Ok",
        }
    }
]
/*fakes user para code*/
const fakeResponseToCodeRecover = [
    {
        email: 'code@example.com',
        response:{
            response: "Ok",
            token: "stringstringstringstringstringstringstringstr"
        }
    }
]

/*fakes user para resend-code*/
const fakeResponseToResendCode = [
    {
        email: 'resendCode@example.com',
        response:{
            response: "2AF",
            twoFactorCode: "pariaturaadipisicingsuntaexerc"
        }
    }
]

const findUser =(email,fakesUsers)=>{
    return fakesUsers.find(user => user.email===email)!==undefined ? fakesUsers.find(user => user.email===email).response : null
}
export const findUserByEmailLogon = ({email}) =>{
    return findUser(email,fakesUsersLogon)
}

export const findUserByEmailRecover=({email})=>{
    return findUser(email,fakesUsersRecover)
}

export const findResponseToCode=({email})=>{
    return findUser(email,fakeResponseToCodeRecover)
}

export const findResponseToResendCode=({email})=>{
    return findUser(email,fakeResponseToResendCode)
}
