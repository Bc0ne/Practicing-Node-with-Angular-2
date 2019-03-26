const express = require('express');
var app = express();
const bodyParser=require('body-parser');
const dbConnection = require('./Config/config');
const myModels = require('./Schemas/SchoolStudentSchema');
const mongoose = require('mongoose');

dbConnection(); 

app.use(bodyParser.json());

app.get('/',(req,res)=>{

    let data={
        id:1,
        name:"mahmoud"
    }
    res.json(JSON.stringify(data));
});

//GET ALL SCHOOL SERVICE
app.get('/api/school/GetAllSchools', (req, res) => {
    myModels.schoolModel.find({}).populate("students").exec((err,data)=>{
        if(err==null)
        {
            res.json({mydata:data})
        }
        else
        {
            console.log(err);
        }
        
    })
  
});

//Get specific school details and its info
app.post('/api/school/GetOneSchool',(req,res)=>{

    myModels.schoolModel.findById(req.body.school).populate("students").exec((err,school)=>{
        res.json(JSON.stringify({school:school}))
    })
})

//Insert school
app.post('/api/school/insertSchool',(req,res)=>{
    let name = req.body.name;
    let addr = req.body.addr;
    let type = req.body.type;
    var MySchoolModel = new myModels.schoolModel({
        _id:mongoose.Types.ObjectId(),
        name:name,
        address:addr,
        type:type
    });
    MySchoolModel.save((err,data)=>{
       if(!err){
        res.json(data)
        }
    });
});

//Insert student in specific school
app.post('/api/school/insertStu',(req,res)=>{
    var StuModel = new myModels.studentModel({
        school:req.body.school,
        name:req.body.student.name,
        addr:req.body.student.addr,
        age:req.body.student.age
    });

    StuModel.save((err,data)=>{
        if(!err){
        myModels.schoolModel.findById(req.body.school).lean().exec((err,school)=>{
            school.students.push(StuModel);
            myModels.schoolModel.update({_id:req.body.school},school,(err,newschool)=>{
                if(!err)
                res.json(school);
            })
        }); 
        }
    })
})

//delete student
app.delete('/api/db/deleteStudent/:sid/:stid',(req,res)=>{
    let schoolid= req.params.sid;
    let stuid = req.params.stid;
    myModels.studentModel.remove({_id:stuid},(err)=>{
        if(err==null){
            myModels.schoolModel.findById(schoolid).lean().exec((err,school)=>{
                let arrOfStudents = school.students.join().split(",");
                const index =  arrOfStudents.indexOf(stuid);
                //console.log(index);
                school.students.splice(index, 1);
                myModels.schoolModel.update({_id:schoolid},school,(err)=>{
                    if(!err){
                        res.json("done");
                    }
                });
            });
            //res.json({"status:"done"});
        }else{
            res.json({"status":"error"});
        }
    });
});

//delete school
app.delete('/api/school/delschool/:id',(req,res)=>{
    let schoolid= req.params.id;
    myModels.schoolModel.remove({_id:schoolid},(err,data)=>{
        if(!err){
            myModels.studentModel.deleteMany({school:schoolid},(err,data)=>{
                if(!err)
                    res.json(JSON.stringify({"status":"done"}));
                else
                res.json(JSON.stringify({Error:err}));
            })
        }else
        res.json(!err);   
    })
})

app.listen(8888);