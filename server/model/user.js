var mongoose =require('mongoose')
var user =mongoose.model('user', {
    email :{
        type :String,
        required :true,
        minlength :true,
        trim : true

    } 
 })

 module.exports ={
  user :user
 };