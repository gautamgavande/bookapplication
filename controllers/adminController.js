const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//login
exports.adminLogin = async (req, res)=>{
    const {email, password} = req.body;
    console.log(req.body)

    const admin = await Admin.findOne({email});
    if(!admin) return res.status(404).json({message: 'Admin not Found'});

    const isMatch = await bcrypt.compare(password, admin.password);
    if(!isMatch) return res.status(404).json({message: 'Invalid credentials'});

    const token = jwt.sign({id: admin._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
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