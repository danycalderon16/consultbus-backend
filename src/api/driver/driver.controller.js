const mongoose = require('mongoose');
const Driver = require('./driver.model')

var bodyParser = require('body-parser');

let jsonParser = bodyParser.json()

exports.getAll = (jsonParser, (req, res) => {
    Driver.find({}, (err, data) => {
        if (err) return res.send(err);
        return res.status(201).send(data);
    }
    );
})

exports.getOne = (req,res)=>{
    const id = req.body;
    const objectId = new mongoose.Types.ObjectId(id);
    console.log(19,objectId);
    Driver.findById(objectId, (err, docs)=> {
        if (err){
            console.log(22,err);
            return res.send(err)
        }        else{
            console.log(26,docs);
            return res.send(docs);
        }
    });
}

exports.create = (req, res) => {
    let newDriver = req.body;
    newDriver._id = new mongoose.Types.ObjectId();
    console.log(newDriver);
    Driver.create(newDriver, (err,data) => {
        if (err) return res.send(err);
        return res.status(201).send(data);
    }
    );
}



exports.update = async(req,res) =>{
    try {
        const driver = await Driver.findById(req.params.id).exec();
        const newDriver = req.body;
        Object.assign(driver, newDriver);
        driver.save();
        res.status(201).json(driver);
    } catch (error) {
        return res.send("Chofer no encontrado");
    }
}

exports.delete = async(req,res) =>{
    try {
        const driver = await Driver.findById(req.params.id).exec();
        const newDriver = {enabled:false};
        Object.assign(driver, newDriver);
        driver.save();
        res.status(201).json(driver);
    } catch (error) {
        return res.send("Chofer no encontrado");
    }
}