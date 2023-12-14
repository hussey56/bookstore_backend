const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { 
    type: String, 
    required: true 
},
  email: { type: String,
     required: true 
    },
  photoUrl:{
    type: String,
    required: true,
  },
  shipping_address: {
    type: String,
    required: true,
    default:""
  },
  payment_method:{
    type:Array,
    required:true,
    default:[{"cod":true}]
  },

},
{timestamps:true}
);

module.exports = mongoose.model('User',blogSchema,'users')