const express = require("express")
const router = exrpess.Router()

router.post("/login", async (req, res, next) => {
    try { // take email and password, authenticate
        
    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try { // take users email, pass, rsvp status, guest number, and make new user in DB

    } catch (err) {
        next(err)
    }
})