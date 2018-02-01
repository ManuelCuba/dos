'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var MaterialShema=Schema({
    personal: {
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
    }, 
                         
    pabvisible: {
        type: [{
            type: Number,
            enum: [1,0]
        }],
        default: [0]
    },               
    pabupdated: {
        type: Date
    },
    pabcreated: {
        type: Date,
        default: Date.now
    },
    pabholistico: {
        type:String,
        default:''
    },      
    pabbim1temorientadora: {
        type:String,
        default:''
    },
    pabbim1holistico:{
        type:String,
        default:''
    },
    pabbim1actglobalizante:{
        type:String,
        default:''
    },
    pabbim1prodintegrador:{
        type:String,
        default:''
    },
    pabbim1campo:{
        type:String,
        default:''
    },
    pabbim1contenidos:{
        type:String,
        default:''
    },


    pabbim1integracion:{
        type:String,
        default:''
    },    
    pabbim1orientaciones:{
        type:String,
        default:''
    },
    pabbim1recursos:{
        type:String,
        default:''
    },
    pabbim1evaluacion:{
        type:String,
        default:''
    },
    pabbim1producto:{
        type:String,
        default:''
    },
    pabbim1bibliografia:{
        type:String,
        default:''
    },
    pabbim1autoeval:{
        type:Number,
        default:0
    },
    pabbim1avance:{
        type:Number,
        default:0
    },



    pabbim2temorientadora: {
        type:String,
        default:''
    },
    pabbim2holistico:{
        type:String,
        default:''
    },
    pabbim2actglobalizante:{
        type:String,
        default:''
    },
    pabbim2prodintegrador:{
        type:String,
        default:''
    },
    pabbim2campo:{
        type:String,
        default:''
    },
    pabbim2contenidos:{
        type:String,
        default:''
    },
    pabbim2integracion:{
        type:String,
        default:''
    },    
    pabbim2orientaciones:{
        type:String,
        default:''
    },
    pabbim2recursos:{
        type:String,
        default:''
    },
    pabbim2evaluacion:{
        type:String,
        default:''
    },
    pabbim2producto:{
        type:String,
        default:''
    },
    pabbim2bibliografia:{
        type:String,
        default:''
    },
    pabbim2autoeval:{
        type:Number,
        default:0
    },
    pabbim2avance:{
        type:Number,
        default:0
    },


    pabbim3temorientadora: {
        type:String,
        default:''
    },
    pabbim3holistico:{
        type:String,
        default:''
    },
    pabbim3actglobalizante:{
        type:String,
        default:''
    },
    pabbim3prodintegrador:{
        type:String,
        default:''
    },
    pabbim3campo:{
        type:String,
        default:''
    },
    pabbim3contenidos:{
        type:String,
        default:''
    },
    pabbim3integracion:{
        type:String,
        default:''
    },    
    pabbim3orientaciones:{
        type:String,
        default:''
    },
    pabbim3recursos:{
        type:String,
        default:''
    },
    pabbim3evaluacion:{
        type:String,
        default:''
    },
    pabbim3producto:{
        type:String,
        default:''
    },
    pabbim3bibliografia:{
        type:String,
        default:''
    },
    pabbim3autoeval:{
        type:Number,
        default:0
    },
    pabbim3avance:{
        type:Number,
        default:0
    },


    pabbim4temorientadora: {
        type:String,
        default:''
    },
    pabbim4holistico:{
        type:String,
        default:''
    },
    pabbim4actglobalizante:{
        type:String,
        default:''
    },
    pabbim4prodintegrador:{
        type:String,
        default:''
    },
    pabbim4campo:{
        type:String,
        default:''
    },
    pabbim4contenidos:{
        type:String,
        default:''
    },
    pabbim4integracion:{
        type:String,
        default:''
    },    
    pabbim4orientaciones:{
        type:String,
        default:''
    },
    pabbim4recursos:{
        type:String,
        default:''
    },
    pabbim4evaluacion:{
        type:String,
        default:''
    },
    pabbim4producto:{
        type:String,
        default:''
    },
    pabbim4bibliografia:{
        type:String,
        default:''
    },
    pabbim4autoeval:{
        type:Number,
        default:0
    },
    pabbim4avance:{
        type:Number,
        default:0
    },

    pabrevisado:{
        type: [{
            type: Number,
            enum: [1,0]
        }],
        default: [0]
    },
    pabsugerencia:{
        type:String,
        default:''
    },
    pabnota:{
        type:Number,
        default:0
    }
});


module.exports=mongoose.model('Material', MaterialShema);