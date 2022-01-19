import { Router } from "express";

import registerRouter from './register'
import loginRouter from './login'
import validateRouter from './validate'
import router from "./register";

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/validate', validateRouter);


export default router;