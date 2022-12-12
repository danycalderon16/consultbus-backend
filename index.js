const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var fs = require('fs'); // to get data from html file

const driver = require('./src/api/driver/driver.routes');
const route = require('./src/api/route/route.routes');

const port = 3000;
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://ittepic:1234@cosulbus.usiewhn.mongodb.net/?retryWrites=true&w=majority');
}

app.use('/api/drivers', driver);
app.use('/api/route', route);

app.cre
 app.use('/', (err,res)=>res.send('Hellow world'));
app.listen(port,()=>{console.log('Escucha en puerto:'+port)})