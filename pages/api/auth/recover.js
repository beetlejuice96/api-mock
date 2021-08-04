import assert from "assert";

export default function logon(req, res) {
    if (req.method === 'POST') {
        try {
            assert.notEqual(null, req.body.email, 'CanNotRecover');
        }catch (bodyError) {
            res.status(403).send(bodyError.message);
        }
        const {email} = req.body;
        if (email) {
            res.status(200).send("Ok");
        }
    }else{
        res.statusCode = 401;
        res.end()
    }

}
