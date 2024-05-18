import { findByEmail, createUser } from '../services/usersServices.js'
import HttpError from '../helpers/HttpError.js'
import gravatar from 'gravatar'
import { token } from 'morgan'

export async function registerUser(req, res, next) {
	const { email } = req.body
	try {
		const user = await findByEmail(email)
		if (user) {
			throw HttpError(409)
		}
		const avatar = gravatar.url(email)
		const result = await createUser({ ...req.body, avatar })
		res.status(201).json({
			user: {
				name: result.name,
				email: result.email,
				avatar: result.avatar,
			},
			token: result.token,
		})
	} catch (error) {
		next(error)
	}
}

export async function loginUser() {}

export async function logoutUser() {}

export async function currentUser() {}
