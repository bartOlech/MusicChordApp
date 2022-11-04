const mongoose = require('mongoose');
const Songs = require('../model/songs');
const upChord = require('../upChord');

const upLetter = (array) => {
    const insArray = array;
    let newArray = [];
    let newArray2 = [];
    insArray.map(el => {
        newArray = [...newArray, upChord.upChord(el[0])]
        newArray2 = [...newArray2, [...newArray, el[1]]]
        newArray = [];
    })
    return newArray2;
}

const upLetters = (array) => {
    let finalArray = [];
    array.map(el => {
        const currArray = el
        const shiftArr = currArray.shift();
        currArray.map(el2 =>{
            finalArray = [...finalArray, [shiftArr, upLetter(el2)]]
        })
    })
    return (finalArray)
}

module.exports.get = (req, res) => {
    mongoose.connect('mongodb+srv://przemss:magisterka@cluster0.kevctne.mongodb.net/musicApp?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {console.log('MongoDB Connected')})
    .catch(err => {console.log(err)}) 

    Songs.find({id: req.body.musicId}).then(data => {
        const upLetterResult = upLetters(data[0].text)
        Songs.findOneAndUpdate({id: req.body.musicId}, {text: upLetterResult}, () => {
            res.send(upLetterResult)
        })
    }).catch(err => console.log(err))



}