const mongoose = require('mongoose');
const Songs = require('../model/songs');

module.exports.getHome = (req, res) => {
    // Connect to database
    mongoose.connect('mongodb+srv://przemss:magisterka@cluster0.kevctne.mongodb.net/musicApp?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {console.log('MongoDB Connected')})
    .catch(err => {console.log(err)}) 

    Songs.find({}).then(data => {
        console.log(data);
        res.send(data)
    })

    // const tekst = [["Zakielak", [["A", 2]] ], ["se", [["B", 1]]], ["panienecka", [["A", 1], ["C", 4]]]]

}