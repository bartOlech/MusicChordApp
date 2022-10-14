const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    }, 
    author: {
        type: String
    },
    text: {
        type: Array
    },
    songId: {
        type: String
    }
})

const UserLdataSchemaogs = mongoose.model('songs', dataSchema, 'songs');
module.exports = UserLdataSchemaogs