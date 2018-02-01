'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BibliaShema=Schema({
    uno: {
        type: String,
        default: ''
    },
    dos: {
        type: String,
        default: ''
    },
    tres: {
        type: String,
        default: ''
    },
    cuatro: {
        type: String,
        default: ''
    },
    cinco: {
        type: String,
        default: ''
    },
    seis: {
        type: String,
        default: ''
    },
    siete: {
        type: String,
        default: ''
    },
    ocho: {
        type: String,
        default: ''
    },
    nueve: {
        type: String,
        default: ''
    },
    diez: {
        type: String,
        default: ''
    }

});


module.exports=mongoose.model('Biblia', BibliaShema);