const express = require('express');
const dbConnect = require('./database/db');
const {PORT} = require('./config/config');
const router = require('./routes/routes');
const app = express(); 


//for deployment purpose
app.use(
   cors({
origin:function(origin,callback){
return callback(null,true);
},
optionsSuccessStatus:200,
credentials:true
   })
);

app.use(express.json({limit:'50mb'}));
dbConnect();

// testing
app.use(router);

// app.use(errorHandler);

app.listen(PORT,console.log(`Backend is running on the ${PORT}`))