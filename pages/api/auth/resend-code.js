import assert from "assert";
import {findResponseToResendCode} from '../../../lib/user/FakesUsers'
export default function logon(req, res) {
    if (req.method === 'POST') {
        const {email,twoFactorCode} = req.body;
        const response = findResponseToResendCode({email});
        try {
            assert.notEqual(null, email, 'CantLogon');
            assert.notEqual(null, twoFactorCode, 'CantLogon');
            assert.notEqual(null, response, 'CantLogon');
        }catch (bodyError) {
            res.status(403).send({response:bodyError.message});
        }
        if (response) {
            res.status(200).send(response);
        }
    }else{
        res.statusCode = 401;
        res.end()
    }
}
