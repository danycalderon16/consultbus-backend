const mongoose = require('mongoose')

const routeSherma = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
});

module.exports = mongoose.model('route',routeSherma)