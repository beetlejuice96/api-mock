import assert from "assert";
import {findUserByEmailLogon} from '../../../lib/user/FakesUsers'
export default function logon(req, res) {
    if (req.method === 'POST') {
        const {email} = req.body;
        const response = findUserByEmailLogon({email});
        try {
            assert.notEqual(null, email, 'CantLogon');
            assert.notEqual(null, response, 'CantLogon');
        }catch (bodyError) {
            res.status(403).json(bodyError.message);
        }
        if (response){
            res.status(200).json(response)
        }
    }else{
        res.statusCode = 401;
        res.end()
    }
}
