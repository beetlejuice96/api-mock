import {findResponseToCode} from "../../../lib/user/FakesUsers";

const assert = require('assert');

export default function code(req, res) {
    const {email} = req.body;
    const twoFactorCode= req.body['2fa-data']
    const response = findResponseToCode({email});
    if (req.method === 'POST') {
        try {
            assert.notEqual(undefined, email, "LoginIncorrect");
            assert.notEqual(undefined, twoFactorCode, "LoginIncorrect");
            assert.notEqual(null, response, "LoginIncorrect");
            if (response) {
                res.status(200).json(response)
            }
        }catch (bodyError) {
            res.status(403).json({response:bodyError.message});
        }

    }else {
        res.statusCode = 401;
        res.end()
    }
}

//FIXME: Falta respuesta de cuando 2FA expiro
