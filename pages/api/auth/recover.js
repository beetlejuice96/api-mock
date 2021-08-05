import assert from "assert";
import { findUserByEmailRecover} from '../../../lib/user/FakesUsers'
export default function logon(req, res) {
    if (req.method === 'POST') {
        const {email} = req.body;
        const response = findUserByEmailRecover({email});
        try {
            assert.notEqual(undefined, email, 'CanNotRecover');
            assert.notEqual(null, response, 'CanNotRecover');
            if (response) {
                res.status(200).send(response);
            }
        }catch (bodyError) {
            res.status(403).send(bodyError.message);
        }
    }else{
        res.statusCode = 401;
        res.end()
    }
}
