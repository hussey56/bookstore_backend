const Joi = require("joi");
const User = require("../model/user");
const userDTO = require("../dto/userDTO");
const UserController = {
  async register(req, res, next) {
    const createBlogSchema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().required(),
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
};

module.exports = UserController