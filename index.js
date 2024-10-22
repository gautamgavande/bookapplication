const express = require("express")
const mongoose = require('mongoose')
require('dotenv').config()
const Admin = require('./models/Admin')
const bcrypt = require('bcryptjs')
const cookieParser =  require('cookie-parser')

const adminRoutes = require('./routes/adminRoutes')
const bookRoutes = require('./routes/bookRoutes')
const userRoutes = require('./routes/userRoutes')



const app=express()
app.use(express.json())
app.use(cookieParser())
const port=3000

const createAdminUser = async ()=>{
    const adminExists = await Admin.findOne({email:'admin@ex.com'})
    if(!adminExists){
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await Admin.create({
            name:'Admin',
            email:'admin@ex.com',
            password: hashedPassword
        });
        console.log('Admin user created')
    }
   
}

//db connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('mongodb connected')
    createAdminUser()
    
})
.catch(err => console.log(err))


//routes
app.use('/', adminRoutes)
app.use('/', bookRoutes)
app.use('/user', userRoutes)


app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})