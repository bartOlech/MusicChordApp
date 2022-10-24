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
        const filteredArray = newSongs.filter(song => song != req.body.songId);

        // Jeśli znalazło taki element to go usuń zamieniając tablice
        if (isAddedAlready.length > 0) {
            UserSongs.updateOne({ userId: req.body.userId }, {$set : {songs: [...filteredArray]}}, 
            function(err, response) { 
                console.log(err)
                console.log('Usunięto');
            });
        } else {
            console.log('Nie ma takiego id w bazie ulubionych usera')
        }

    });


}