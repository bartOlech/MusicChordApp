const mongoose = require('mongoose');
const Songs = require('../model/songs');
const UserSongs = require('../model/userSongs');

module.exports.set = (req, res) => {
    // Connect to database
    mongoose.connect('mongodb+srv://przemss:magisterka@cluster0.kevctne.mongodb.net/musicApp?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {console.log('MongoDB Connected')})
    .catch(err => {console.log(err)}) 

        UserSongs.find({ userId: req.body.userId }).then(data => {
            Songs.find({}).then(el => {
                const arr = [];
                data[0].songs.map(el2 => {
                    el.map(el3 => {
                        if (el2 == el3.id) {
                            arr.push(el3)
                        }
                    })
                })
                res.send(arr)
            });
        })



    // const tekst = [["Zakielak", [["A", 2]] ], ["se", [["B", 1]]], ["panienecka", [["A", 1], ["C", 4]]]]

}