const mongoose = require('mongoose');
const Songs = require('../model/songs');
const UserSongs = require('../model/userSongs');

module.exports.set = (req, res) => {
    // Connect to database
    mongoose.connect('mongodb+srv://przemss:magisterka@cluster0.kevctne.mongodb.net/musicApp?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {console.log('MongoDB Connected')})
    .catch(err => {console.log(err)}) 

    UserSongs.find({ userId: req.body.userId }).then(el => {
    
        let newSongs = el[0].songs
        const isAddedAlready = newSongs.filter(song => song == req.body.songId); 

        // Jeśli juz takie jest to nie dodawaj
        if (isAddedAlready.length == 0) {
            UserSongs.findOneAndUpdate({ userId: req.body.userId }, {$set : {songs: [...newSongs, req.body.songId]}}, 
            function(err, response) { 
                console.log(err)
                console.log('zmieniono');
            });
        } else {
            console.log('Juz jest takie id w ulubionych')
        }

    });


}