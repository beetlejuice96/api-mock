import assert from "assert";
import {findResponseToResendCode} from '../../../lib/user/FakesUsers'
export default function logon(req, res) {
    if (req.method === 'POST') {
        const {email} = req.body;
        const twoFactorCode = req.body['2fa-data']
        const response = findResponseToResendCode({email});
        try {
            assert.notEqual(undefined, email, 'CantLogon');
            assert.notEqual(undefined, twoFactorCode, 'CantLogon');
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
