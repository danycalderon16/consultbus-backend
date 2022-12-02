const mongoose = require('mongoose')

const driverSherma = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
    age:Number,
    phone: String,
    license: String,
    enabled:Boolean,
    route:String
});

module.exports = mongoose.model('driver',driverSherma)