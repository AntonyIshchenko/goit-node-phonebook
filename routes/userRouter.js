import express from 'express'
import validateBody from '../helpers/validateBody.js'
import { userSchemaRegister } from '../schemas/usersSchemas.js'
import { registerUser } from '../controllers/usersControllers.js'

const router = express.Router()

router.post('/signup', validateBody(userSchemaRegister), registerUser)
router.post('/login')
router.post('/logout')
router.get('/current')

export default router
