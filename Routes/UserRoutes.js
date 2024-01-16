const route=require('express').Router()
const {login,register,about,contact}= require('../Controller/Api')
const { specificAuth } = require('../MiddleWare/auth')
route.get('/login',specificAuth,login)
route.get('/register',specificAuth,register)
route.get('/about',about)
route.get('/contact',contact)

module.exports=route