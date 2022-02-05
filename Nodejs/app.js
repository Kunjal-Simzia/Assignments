const express=require('express')
const mongoose=require('mongoose')

const url ='mongodb://localhost/student'

const app =express()

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection

con.on('open',()=>{
    console.log('connected here')
})

app.use(express.json())

const studRouter=require('./routers/student')
app.use('/student',studRouter)

app.listen(9000,function(){
    console.log('server here')
})