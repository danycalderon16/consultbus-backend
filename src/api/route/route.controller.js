const mongoose = require('mongoose');
const Route = require('./route.model')

var bodyParser = require('body-parser');

let jsonParser = bodyParser.json()

exports.getAll = (jsonParser, (req, res) => {
    Route.find({}, (err, data) => {
        if (err) return res.send(err);
        return res.status(201).send(data);
    }
    );
})

exports.getOne = (req, res) => {
    const id = req.body;
    const objectId = new mongoose.Types.ObjectId(id);
    Route.findById(objectId, (err, docs) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send(docs);
        }
    });
}

exports.create = (req, res) => {
    let newRoute = req.body;
    newRoute._id = new mongoose.Types.ObjectId();
    Route.create(newRoute, (err, data) => {
        if (err) return res.send(err);
        return res.status(201).send(data);
    }
    );
}

exports.update = async (req, res) => {
    try {
        const Route = await Route.findById(req.params.id).exec();
        const newRoute = req.body;
        Object.assign(Route, newRoute);
        Route.save();
        res.status(201).json(Route);
    } catch (error) {
        return res.send("Chofer no encontrado");
    }
}

exports.delete = async (req, res) => {

    console.log(52);
    const id = req.params.id;
    const objectId = new mongoose.Types.ObjectId(id);
    Route.findByIdAndDelete(objectId,(err,data)=>{
        if(err)
            return res.send(err);
        return res.send(data);
    });
}