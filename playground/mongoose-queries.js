var {ObjectID} = require('mongodb')
var {mongoose} = require('./../server/db/mongoose')
var {todo}= require('./../server/model/todo')
var id = '5c4ea2d57fa8153508dc1e50';

console.log(ObjectID.isValid(id))
//console.log('queries started')
// todo.find().then((docs) =>{
//     console.log(docs)
// },(error) =>{
//     console.log(error)
// });

// todo.findOne({_id :id}).then( (docs) =>{
//     console.log(docs)
// },(error) =>{
//     console.log(error)
// })

todo.findById(id).then( (result) =>{
    console.log('result are :',result)
}, (error) =>{
    console.log(error)
})

