const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b145460747be3403001cd461';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not Valid.');
// }

// // Find
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// // FindOne
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// // FindByID
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found.')
//     }
//     console.log('Todo: ', todo);
// }).catch((e) => console.log(e));
const id = '5b1304a12eecebf836f21404';

if(ObjectID.isValid(id)){
    User.findById(id).then((user) => {
        if(!user) {
            return console.log('User does not exist.')
        }
        console.log(JSON.stringify(user, undefined, 2));
    });
} else {
    console.log('Unvalid ID.');
}