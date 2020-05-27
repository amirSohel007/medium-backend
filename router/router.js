const routes = require('express').Router();
const Register = require('../models/Register')

routes.post('/register', async (req, res) => {
    const {username, email, password} = req.body
        const newuser = new Register({
            username:username,
            email : email,
            password: password
        })
    try {
        newuser.save(function(err, data){
            console.log(err)
        })
        
    } catch (error) {
        console.log(error)
    }
});


// routes.post('/login',  (req, res) => {
//     const loginObject = {email, password} = req.body
//     res.json(loginObject)
// });

// routes.post('/new-post', (req, res) => {
//     const postObject = {title, bodytext} = req.body
//     res.json(postObject)
// })

module.exports = routes;