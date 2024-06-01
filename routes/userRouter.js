import express from 'express';
import validateBody from '../helpers/validateBody.js';
import uploadFile from '../middlewares/uploadFile.js';
import {
  userSchemaRegister,
  userSchemaLogin,
} from '../schemas/usersSchemas.js';
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updateAvatar,
} from '../controllers/usersControllers.js';
import authentificate from '../middlewares/authentificate.js';

const router = express.Router();

router.post('/signup', validateBody(userSchemaRegister), registerUser);
router.post('/login', validateBody(userSchemaLogin), loginUser);
router.post('/logout', authentificate, logoutUser);
router.get('/current', authentificate, currentUser);
router.patch(
  '/avatar',
  authentificate,
  uploadFile.single('avatar'),
  updateAvatar
);

export default router;
