const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


    /*
    * * Bronze Challenge * 
    * 
    * Design a '/user/create' endpoint that will let the user send a new user object through the server to the database.
    *
    * If successful, the server should store the user object sent in the database, and send a response to the user with a 200 status code and the user object just saved.
    *
    * If the operation fails, the server should respond with a 500 status code and an error message back.
    * * Note :: You do not need to use bcrypt. * 
    */


    router.post('/create', async(req, res) => {
        let { username, password } = req.body.user

        try {
            let newUser = await User.create({
                username,
                password 
            })

            if(newUser) {
                res.status(201).json({
                    message: 'new user created',
                    user: newUser
                })
            }

        } catch (error) {
            res.status(500).json({
                error: error
            })
        }
    })




     /*
    *  * SILVER CHALLENGE *
    * Complete the bronze level challenge above, but this time create a '/user/login' endpoint that will let the user send a user object through the server 
    and check with an existing user in the database.
    * 
    * On success, the user object should be sent back with an appropriate status code.
    * 
    * On failure, an appropriate status code and an error message should be sent.
    * Note :: You do not need to use bcrypt.
    */

 
    router.post('/login', async(req, res) => {
        let { username, password } = req.body.user 

        try {
            let foundUser = await User.findOne({
                where: {
                    username
                }
            })

            if(foundUser) {
                res.status(200).json({
                    message: 'user logged in',
                    user: foundUser
                })
            }

        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    })


module.exports = router;