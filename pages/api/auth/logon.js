import assert from "assert";
import {findUserByEmailLogon} from '../../../lib/user/FakesUsers'
export default function logon(req, res) {
    if (req.method === 'POST') {
        const {email} = req.body;
        const response = findUserByEmailLogon({email});
        try {
            assert.notEqual(undefined, email, 'CantLogon');
            assert.notEqual(null, response, 'CantLogon');
            if (response){
                res.status(200).json(response)
            }
        }catch (bodyError) {
            res.status(403).json({response:bodyError.message});
        }

    }else{
        res.statusCode = 401;
        res.end()
    }
}
