const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove

// Todo.remove().then((result) => {
//     console.log(result);
// });

// findOneAndRemove

// Todo.findOneAndRemove({_id: ObjectID("5b14893006246b0710506919")}).then((doc) => {
//     console.log(doc);
// });

// findByIdAndRemove

Todo.findByIdAndRemove(ObjectID("5b14893406246b071050691a")).then((doc) => {
    console.log(doc);
});