import { User } from "../db/models/User.js";

 export function findByEmail(email) {
  return  User.findOne({ email })
}

