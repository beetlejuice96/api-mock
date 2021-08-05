import assert from "assert";
import { findUserByEmailRecover} from '../../../lib/user/FakesUsers'
export default function logon(req, res) {
    if (req.method === 'POST') {
        const {email} = req.body;
        const response = findUserByEmailRecover({email});
        try {
            assert.notEqual(null, req.body.email, 'CanNotRecover');
            assert.notEqual(null, response, 'CanNotRecover');
        }catch (bodyError) {
            res.status(403).send(bodyError.message);
        }
        if (response) {
            res.status(200).send(response);
        }
    }else{
        res.statusCode = 401;
        res.end()
    }
}
