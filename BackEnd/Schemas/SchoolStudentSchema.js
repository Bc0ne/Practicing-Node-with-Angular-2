const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchoolSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name:String,
    address:String,
    type:String,
    students:[{type:Schema.Types.ObjectId,ref:"studentModel"}]
});

var StudentSchema = new Schema({
    school:{type:Schema.Types.ObjectId,ref:"schoolModel"},
    name:String,
    addr:String,
    age:Number
});



var studentModel = mongoose.model('studentModel',StudentSchema);


var schoolModel=mongoose.model('schoolModel',SchoolSchema)
module.exports={
    studentModel:studentModel,
    schoolModel:schoolModel
}