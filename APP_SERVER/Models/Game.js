var mongoose = require('mongoose');

var gamesSchema = mongoose.Schema({

    img:
    {
        type: String,
        required: true,
        minLength: 3
    },
    name:
    {
        type: String,
        required: true,
        minLength: 3
    },
    author: {
        type: String,
        required: true,
        minLength: 3
    },
    rating: {
        type: String,
        required: true,
        minLength: 3
    },
    price: {
        type: String,
        required: true,
        default: 0
    },
    genre:{
        type: String,
        required: true,
        minLength: 2
    }

});
mongoose.model('Game', gamesSchema,'games');