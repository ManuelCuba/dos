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
    inicial: [{
        curso:{
            type: Schema.ObjectId,
            ref: 'Curso'
        },
        materia:{
            type: Schema.ObjectId,
            ref: 'Materia'
        }, 
        pab: [{                       
            visible: {
                type: [{
                    type: Number,
                    enum: [1,0]
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
            holistico: {
                type:String,
                default:''
            },            
            bim1:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }                
            },
            bim2:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }
            },
            bim3:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }
            },
            bim4:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }
            },
            revisado:{
                type: [{
                    type: Number,
                    enum: [1,0]
                }],
                default: [0]
            },
            sugerencia:{
                type:String,
                default:''
            },
            nota:{
                type:Number,
                default:0
            }
        }],
        pdc: [{
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
                ser:{
                    type:String,
                    default:''
                },
                saber:{
                    type:String,
                    default:''
                },
                hacer:{
                    type:String,
                    default:''
                },
                decidir:{
                    type:String,
                    default:''
                }
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
        }]
    }],
    primaria: [{
        curso:{
            type: Schema.ObjectId,
            ref: 'Curso'
        },
        materia:{
            type: Schema.ObjectId,
            ref: 'Materia'
        }, 
        pab: [{                       
            visible: {
                type: [{
                    type: Number,
                    enum: [1,0]
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
            holistico: {
                type:String,
                default:''
            },            
            bim1:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }                
            },
            bim2:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }
            },
            bim3:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }
            },
            bim4:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }
            },
            revisado:{
                type: [{
                    type: Number,
                    enum: [1,0]
                }],
                default: [0]
            },
            sugerencia:{
                type:String,
                default:''
            },
            nota:{
                type:Number,
                default:0
            }
        }],
        pdc: [{
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
                ser:{
                    type:String,
                    default:''
                },
                saber:{
                    type:String,
                    default:''
                },
                hacer:{
                    type:String,
                    default:''
                },
                decidir:{
                    type:String,
                    default:''
                }
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
        }]
    }],
    secundaria: [{
        curso:{
            type: Schema.ObjectId,
            ref: 'Curso'
        },
        materia:{
            type: Schema.ObjectId,
            ref: 'Materia'
        }, 
        pab: [{                       
            visible: {
                type: [{
                    type: Number,
                    enum: [1,0]
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
            holistico: {
                type:String,
                default:''
            },            
            bim1:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }                
            },
            bim2:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }
            },
            bim3:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }
            },
            bim4:{
                temorientadora: {
                    type:String,
                    default:''
                },
                holistico:{
                    type:String,
                    default:''
                },
                actglobalizante:{
                    type:String,
                    default:''
                },
                prodintegrador:{
                    type:String,
                    default:''
                },
                campo:{
                    type:String,
                    default:''
                },
                contenidos:{
                    type:String,
                    default:''
                }
            },
            revisado:{
                type: [{
                    type: Number,
                    enum: [1,0]
                }],
                default: [0]
            },
            sugerencia:{
                type:String,
                default:''
            },
            nota:{
                type:Number,
                default:0
            }
        }],
        pdc: [{
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
                ser:{
                    type:String,
                    default:''
                },
                saber:{
                    type:String,
                    default:''
                },
                hacer:{
                    type:String,
                    default:''
                },
                decidir:{
                    type:String,
                    default:''
                }
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
        }]
    }]
});


module.exports=mongoose.model('Material', MaterialShema);