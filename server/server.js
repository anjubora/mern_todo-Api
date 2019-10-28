 const  express =require('express')
 const body_parser = require('body-parser')
 var {mongoose} =require('./db/mongoose')
 var {todo} =require('./model/todo')
var {user}=require('./model/user')
var {user}=require('./model/user')
var {ObjectID} = require('mongodb')
const _=require('lodash')
const cors = require('cors');



const app = express()
app.use(cors())
app.use(body_parser.json())
const port = process.env.PORT || 4040




app.post('/todos', (req,res)=>{
   // console.log(req.body)
   var newtodo =new todo({
       todo_description : req.body.todo_description,
       todo_responsible :req.body.todo_responsible,
       todo_priority :req.body.todo_priority,
       todo_completed:req.body.todo_completed
   });
   newtodo.save().then((result)=>{
      res.send(result)
   },(e) =>{
     res.status(400).send(e);
   }
   )

});

app.get('/todos',(req,res) =>{
    todo.find().then( (result) =>{
        if(!result){
            return res.status(400).send('there is not any result')
        }
    res.send(result)
    },(error) =>{
        res.status(400).send((error))
    })
})
app.get('/todos/:id',(req,res) =>{
    var id = req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(400).send('id is invalid')
    }
    
    console.log(id)
    todo.findById(id).then((docs) =>{
        if(!docs){
          return   res.status(400).send('oops !!!! not any document found with this id')
        }
        console.log(docs.text)

       res.send({docs})
    },(error) =>{
        res.status(400).send(error);
        
    })
});

app.delete('/todos/:id',(req,res) =>{
    var id=req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(400).send('not a valid id')
    }
       todo.findByIdAndRemove(id).then((docs)=>{
           if(!docs){
               return res.status(400).send('not any records by that id')
           }
           res.send(docs)
        },(errror)=>{
            res.status(200).send(error)
        })
    });


 //to update
    // app.patch('/todos/:id',(req,res) =>{
    //     var id=req.params.id
    //     var body=_.pick(req.body,['text','completed'])
    //     if(!ObjectID.isValid(id)){
    //         return res.status(400).send('not a valid id')
    //     }

    //     if(_.isBoolean(body.completed) && body.completed){
    //         body.completedat= new Date().getTime()
    //     }
    //     else{
    //         body.completed =false
    //         body.completedat=null
    //     }
    //     todo.findByIdAndUpdate(id, {$set :body},{new :true}).then((docs)=>{
    //         res.status(200).send(docs)
    //     },(error) =>{
    //         res.status(400).send(error)
    //     })

    //     }
    
    // )

    //to update the todo
    
    app.patch('/todos/edit/:id',(req,res)=>{
        console.log('in update route')
       var id=req.params.id;
       var body=req.body.updatedTodo;
       console.log(id ,body)
       todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((docs)=>{
       console.log(docs)
         res.send('todo updated')
       },(err)=>{
res.send('Something went wrong')
       })

    })



    



app.listen(port,() =>{
console.log(`this app is running on port ${port}`)
});
