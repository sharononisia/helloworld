const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
    maizetype: {
        type: String,
        trime: true,
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    }
});

module.exports = mongoose.model('Crop',cropSchema);