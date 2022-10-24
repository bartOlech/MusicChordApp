const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    songs: {
        type: Array
    },
    userId: {
        type: String
    }
})

const UserSongs = mongoose.model('users', dataSchema, 'users');
module.exports = UserSongs;