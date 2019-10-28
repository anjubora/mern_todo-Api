var mongoose =require('mongoose')
//var {db}=require('./../../credentials')
mongoose.Promise=global.Promise
//mongoose.connect(db || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true })
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true })

module.exports = {
    mongoose :mongoose
};
