const express = require('express');
const Router = express.Router();

  // create comment
  Router.post('/check',async (req,res)=>{
   
    const {content} = req.body
    
    return res.status(201).json({message:"comment created"+content});
});

module.exports = Router