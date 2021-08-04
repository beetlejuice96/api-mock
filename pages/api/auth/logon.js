import assert from "assert";

export default function logon(req, res) {
    if (req.method === 'POST') {
        try {
            assert.notEqual(null, req.body.email, 'Email required');
            assert.notEqual(null, req.body.password, 'Password required');
        }catch (bodyError) {
            res.status(403).json({
                "response": "LoginIncorrect"
            });
        }
        const {email,password} = req.body;
        if (email&&password){
            res.status(200).json({
                response: "Ok",
                token: "stringstringstringstringstringstringstringstr"
            })
        }
    }else{
        res.statusCode = 401;
        res.end()
    }
}
