import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';

import { authRegisterSchema, authLoginSchema } from '../validation/auth.js';

import { registerController, loginController } from '../controllers/auth.js';

const authRouter = Router();
//signup
authRouter.post(
  '/register',
  validateBody(authRegisterSchema),

  ctrlWrapper(registerController),
);

authRouter.post(
  '/login',
  validateBody(authLoginSchema),
  ctrlWrapper(loginController),
);

export default authRouter;
