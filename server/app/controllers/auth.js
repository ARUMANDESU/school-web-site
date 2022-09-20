const User          = require('../models/user');

const register = async (req, res) => {
    const user = await User.findOne({firstName: req.body.firstName, lastName:req.body.lastName }).exec();
    if(!user){
        await User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(500).json(err))
    }
    else{
        res.status(409).json({success:false, text:"Already exists"});
    }


};


module.exports ={
    register,
}