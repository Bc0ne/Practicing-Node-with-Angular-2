module.exports = function ConnectMongoDb(){
    const mongoose = require('mongoose');
  mongoose.connect('mongodb://schooluser:schooluser@ds129374.mlab.com:29374/schools',(err,data)=>{
        if(err)
            console.log(err);
        else
            console.log("db connected");
    });
}

/*
module.exports = function ConnectMongoDb(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/schools',(err,data)=>{
        if(err)
            console.log(err);
        else
            console.log("db connected");
    });
}

*/