const assert = require('assert');

export default function code(req, res) {
    if (req.method === 'POST') {
        try {
            assert.notEqual(null, req.body.email, 'Email required');
            assert.notEqual(null, req.body.password, 'Password required');
            assert.notEqual(null, req.body.twoFactorCode, 'Two Factor Code required');
        }catch (bodyError) {
            res.status(403).send("bad request");
        }
        res.status(200).json({
            response: "Ok",
            token: "stringstringstringstringstringstringstringstr"
        })
    }else {
        res.statusCode = 401;
        res.end()
    }
}

//FIXME: Falta respuesta de cuando 2FA expiro
