//✅ OK

import { Router } from 'express';
import { tokenCheck } from '../../middleware/tokenCheck.mw';
import { ReqUser } from '../../types';

const router = Router();


router.get('/', tokenCheck, async (req: ReqUser, res) => {

    try {

        res.status(200).json({ message: 'valid' });
    } catch (error) {

        res.status(404).json({ message: 'not valid', error })


    }


})


export default router;