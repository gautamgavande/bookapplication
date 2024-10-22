const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const { name, age, phone, email, username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(1000 + Math.random() * 9000);

    const user = new User({
        name, age, phone, email, username, password:hashedPassword,otp
    })
    await user.save()
     
    res.json({message:"registration successfully verify otp to complete the process"})

}


exports.verifyOTP=async (req,res)=>{
    const {email,otp}=req.body;
    const user =await User.findOne({email})

    if(!user|| user.otp !==otp) return res.status(400).json({message:'invalid otp'})

    user.verified=true;
    await user.save()

    res.json({message:"otp verified Registartion complete"})
}

exports.login=async (req,res)=>{
    const {email,password}=req.body
    const user = await User.findOne({email})
    if(!user) return res.status(404).json({message: 'user not found'});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(404).json({message: 'Invalid credentials'});

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
    // res.json({token})

    res.cookie('token',token,{
        httpOnly: true
    })
    res.json({message: "Login sucessfull"})
}

exports.logout = (req, res) => {
    res.cookie('token', '', {
        httpOnly: true, 
        expires: new Date(0)  
    });
    res.json({ message: "Logout successful" });
};
