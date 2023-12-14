const Joi = require("joi");
const User = require("../model/user");
const userDTO = require("../dto/userDTO");
const emailRegex = /^[\w.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const UserController = {
  async register(req, res, next) {
    const createBlogSchema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().regex(emailRegex).required(),
      photoUrl: Joi.string().required(),
    });
    const { error } = createBlogSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    const { username, email, photoUrl } = req.body;

    let newUser;
    try {
      newUser = new User({
        username,
        email,
        photoUrl,
      });
      await newUser.save();
    } catch (error) {
      return next(error);
    }
    const UserDto = new userDTO(newUser);
    return res.status(201).json({user:UserDto});
  },

async singleuserdatabyemail(req,res,next){

  const getbyEmailSchema = Joi.object({
    email:Joi.string().regex(emailRegex).required()
});

const {error} = getbyEmailSchema.validate(req.params);
if(error){
    return next(error);
}

let user;
const {email} = req.params;
try {
  user = await User.findOne({email:email});
  if(user == null){
    return res.status(200).json({data:null})

  }
} catch (error) {
  return next(error);
}
const UserDto = new userDTO(user);
return res.status(200).json({data:UserDto})
}
};

module.exports = UserController