const routes = require('express').Router();
const {getPosts, createPost, getPost} = require('../controllers/post')
const {singleUser, getUsers} = require('../controllers/user')
const {Authorization, registerUser, loginUser, SignOut} = require('../controllers/auth')

//login user
routes.post("/login", loginUser);

//register new user
routes.post('/register', registerUser);

//Sign out user
routes.get('/signout', Authorization, SignOut);

// new article
routes.post('/new-post', Authorization, createPost);

//all posts
routes.get('/posts', getPosts);

//single post
routes.get('/post/:id', Authorization, getPost);

//all user
routes.get('/users', Authorization, getUsers)

//single user
routes.get('/user/:id', Authorization, singleUser)

module.exports = routes;