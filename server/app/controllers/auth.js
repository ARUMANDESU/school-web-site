const User          = require('../models/user');
const bcrypt        = require('bcrypt');
const dotenv        = require('dotenv');    dotenv.config();
const salt          = process.env.saltRounds;

const register = async (req, res) => {
    const user = await User.findOne({firstName: req.body.firstName, lastName:req.body.lastName }).exec();

    if(!user){
        bcrypt.hash(req.body.password,7 , async function(err, hash) {
            await User.create({firstName:req.body.firstName,lastName:req.body.lastName,phoneNumber:req.body.phoneNumber,password:hash})
                .then(user => res.json(user))
                .catch(err => res.status(500).json(err))
        });

    }
    else{
        res.status(409).json({success:false, text:"Already exists"});
    }
};



module.exports ={
    register,
}