import { findByEmail } from "../services/usersServices.js";
import HttpError from "../helpers/HttpError.js";
    

export async function registerUser(req, res, next) {
    const { email } = req.body
    try {
        const user = await findByEmail(email)
        if (user) {
            throw HttpError(409);
        }
                   
    } catch (error) {
        next(error)
    }

 };

export async function loginUser() { };

export async function logoutUser() { };

export async function currentUser() { };