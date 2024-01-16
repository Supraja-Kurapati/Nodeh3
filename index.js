//console.log("hello")
const express=require('express')
const app= express()

const route=require('./Routes/UserRoutes')
const { authforAll } = require('./MiddleWare/auth')


app.use(authforAll)

app.use('/api',route)

app.listen(5000,()=>{
    console.log("Server Running");
})