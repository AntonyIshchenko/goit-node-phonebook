import express from 'express';
import validateBody from '../helpers/validateBody.js';
import { userSchemaRegister } from '../schemas/usersSchemas.js';
import { registerUser } from '../controllers/usersControllers.js';
import authentificate from '../middlewares/authentificate.js';

const router = express.Router();

router.post('/signup', validateBody(userSchemaRegister), registerUser);
router.post('/login');
router.post('/logout', authentificate, (req, res) => res.send('OK'));
router.get('/current', authentificate, (req, res) => res.send('OK'));

export default router;
