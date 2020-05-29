const routes = require('express').Router();

const registerUser = require('../controllers/register')
const createPost = require('../controllers/write-post')
const getPosts = require('../controllers/get-post')
const loginUser = require('../controllers/login')
const getUsers = require('../controllers/user')
const singleUser = require('../controllers/single-user')
//login user
routes.post("/login", loginUser);

//register new user
routes.post('/register', registerUser);

// new article
routes.post('/new-post', createPost);

//all posts
routes.get('/posts', getPosts);

//all user
routes.get('/users', getUsers)

//single user
routes.get('/user/:id', singleUser)

module.exports = routes;
