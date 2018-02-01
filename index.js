'use strict'

var mongoose=require('mongoose');
var app=require('./app');
var port=process.env.PORT || 3000;

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/fenscil2', {useMongoClient: true})
    .then (() => {
        console.log('conexion satisfactoria...');

        app.listen(port, () => {
            console.log('El servidor local con Node y Express esta corriendo');
        });
    })
    .catch(err => console.log(err));