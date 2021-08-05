import {findResponseToCode} from "../../../lib/user/FakesUsers";

const assert = require('assert');

export default function code(req, res) {
    const {email,twoFactorCode} = req.body;
    const response = findResponseToCode({email});
    if (req.method === 'POST') {
        try {
            assert.notEqual(null, email, "LoginIncorrect");
            assert.notEqual(null, twoFactorCode, "LoginIncorrect");
            assert.notEqual(null, response, "LoginIncorrect");
        }catch (bodyError) {
            res.status(403).json({response:bodyError.message});
        }
        if (response) {
            res.status(200).json(response)
        }
    }else {
        res.statusCode = 401;
        res.end()
    }
}

//FIXME: Falta respuesta de cuando 2FA expiro
