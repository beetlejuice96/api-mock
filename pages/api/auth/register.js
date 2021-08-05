import assert from "assert";
import {findResponseToRegister} from '../../../lib/user/FakesUsers'
export default function logon(req, res) {
    if (req.method === 'POST') {
        const {email,firstname,lastname,password} = req.body;
        const confirmPassword = req.body['confirm-password'];
        const  invitationToken = req.body['invitation-token'];
        const response = findResponseToRegister({email});
        try {
            assert.notEqual(undefined, email, 'CantLogon');
            assert.notEqual(undefined, firstname, 'CantLogon');
            assert.notEqual(undefined, lastname, 'CantLogon');
            assert.notEqual(undefined, password, 'CantLogon');
            assert.notEqual(undefined, confirmPassword, 'CantLogon');
            assert.notEqual(undefined, invitationToken, 'CantLogon');
            assert.notEqual(null, response, 'CantLogon');
            if (response) {
                res.status(200).send(response);
            }
        }catch (bodyError) {
            res.status(403).send({response:bodyError.message});
        }
    }else{
        res.statusCode = 401;
        res.end()
    }
}
