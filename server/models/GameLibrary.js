const { Schema, model } = require('mongoose')

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    date_released: {
        type: Date,
        dateformat: 'DD/MM/YYYY'
    },
    genres: {
        type: Array
    },
    platforms: {
        type: Array
    }
})




const GameLibrary = model('gamelibrary', gameSchema);


module.exports = GameLibrary;