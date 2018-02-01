'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PdcShema=Schema({
    /*personal: {
        type: Schema.ObjectId,
        ref: 'Personal'
    },
    psp:{
        type:String,
        default:''
    },
    gestion: {
        type: String,
        default: ''
    },    
    curso:{
        type: Schema.ObjectId,
        ref: 'Curso'
    },
    materia:{
        type: Schema.ObjectId,
        ref: 'Materia'
    }, */
    personal: {
        type: Schema.ObjectId,
        ref: 'Personal'
    },
    curso:{
        type: Schema.ObjectId,
        ref: 'Curso'
    },
    materia:{
        type: Schema.ObjectId,
        ref: 'Materia'
    },
    material:{
        type: Schema.ObjectId,
        ref: 'Material'
    },
    vigencia: {
        type: [{
            type: Number,
            enum: [1,0]
        }],
        default: [0]
    },
    bimestre: {
        type: [{
            type: Number,
            enum: [1,2,3,4,0]
        }],
        default: [0]
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    temorientadora: {
        type:String,
        default:''
    },
    holisbim: {
        type:String,
        default:''
    },
    integracion:{
        type:String,
        default:''
    },
    contenidos:{
        type:String,
        default:''
    },
    orientaciones:{
        type:String,
        default:''
    },
    recursos:{
        type:String,
        default:''
    },
    evaluacion:{
        type:String,
        default:''
    },
    producto:{
        type:String,
        default:''
    },
    bibliografia:{
        type:String,
        default:''
    },
    inicio:{
        type: Date,
        default: '2018-01-01'
    },
    fin:{
        type: Date,
        default: '2018-01-01'
    },
    autoeval:{
        type:Number,
        default:0
    },
    avance:{
        type:Number,
        default:0
    },
    sugerencia:{
        type:String,
        default:''
    }
});
module.exports=mongoose.model('Pdc', PdcShema);