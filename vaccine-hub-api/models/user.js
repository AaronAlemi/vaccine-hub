const db = require("../db")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        // User should submit email and pass
        // If either missing, throw error
        //
        //Lookup user in db by email
         // if user is found, compare passwords submitted with db
         // if match, return the user

         // if any goes wrong, throw unauthorized error
         throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials) {
        // user should submit email, password, rsvp status, and number of guests
        //if any are missing throw error
        const requiredFields = ["email", "password"]

        // ensure no user exists with that email
        // if one does throw error

        // take users password and hash it
        // take the users email and lowercase it

        // create a new user in DB with all their info
        // return the user
    }
}

module.exports = User