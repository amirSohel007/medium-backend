const routes = require('express').Router();

const registerUser = require('../controllers/register')
const createPost = require('../controllers/write-post')
const getPosts = require('../controllers/get-post')
const loginUser = require('../controllers/login')

//register new user
routes.post('/register', registerUser);

//login user
routes.post("/login", loginUser);

//create new article
routes.post('/new-post', createPost);

//fetch all posts
routes.get('/posts', getPosts);

module.exports = routes;
