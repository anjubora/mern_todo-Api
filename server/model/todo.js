var mongoose =require('mongoose')
var todo =mongoose.model('todo',{
  todo_description :{
        type :String,
       
    }, 
    todo_responsible :{
        type :String,
        
    } ,
    todo_priority :{
      type :String,
     
    },
    todo_completed:{
      type :Boolean   
    }
 })
 // var newtodo = new todo({text : 'cooking',})
 
//   newtodo.save().then( (result) =>{
//       console.log('saved :',result)
//   },(error) =>{
//       console.log(error)
//   })
 
  module.exports ={
      todo
  }
 