const express =require('express')
const path =require('path')
const app= express()

const SERVER_PORT= process.env.PORT || 3333

app.use('/public' ,express.static(path.join(__dirname,'public')))

app.get('/' , (req,res)=>{res.send('hello from backend')})

app.listen(SERVER_PORT, ()=>{console.log("server started on https://localhost:3333")})