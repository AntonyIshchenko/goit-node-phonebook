import { User } from '../db/models/User.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export function findByEmail(email) {
	return User.findOne({ email })
}

export async function createUser(userData) {
	const newUser = new User(userData)
	await newUser.hashPassword()

	await newUser.save()
	const id = newUser._id
	return await updateUserToken(id)
}

export async function updateUserToken(id) {
	const { SECRET_KEY } = process.env
	const token = jwt.sign({ id }, SECRET_KEY)
	const result = await User.findByIdAndUpdate(id, { token }, { new: true })

	return result
}
