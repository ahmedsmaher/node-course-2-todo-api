// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // deleteMany
    
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Moustafa'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne

    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteOne({name: 'Mahmoud'});

    // findOneAndDelete

    // db.collection('Todos').findOneAndDelete({text: 'walk the dog'}).then((result) => {
    //     console.log(result.value);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID("5b10735f5835c210500ee181")}).then((result) => {
    //     console.log(result.value)
    // });

    // db.close();
});