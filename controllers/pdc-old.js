'use strict'

//var path=require('path');
//var fs=require('fs');
var mongoosePaginate=require('mongoose-pagination');

var User=require('../models/user');
var Institucion=require('../models/institucion');
var Personal=require('../models/personal');
var Curso=require('../models/curso');
var Pdc=require('../models/pdc');
var Material=require('../models/material');

function savePdc(req, res){
    var material=req.params.id;
    var bimestre=req.params.bim;
    var persona=req.params.persona;
    var curso=req.params.curso;
    var materia=req.params.materia;
    var pdc=new Pdc();
    var params=req.body;    
    if(params.temorientadora){
        pdc.personal=persona;
        pdc.curso=curso;
        pdc.materia=materia;
        pdc.bimestre=bimestre;
        pdc.material=material;
        pdc.temorientadora=params.temorientadora;
        pdc.holisbim=params.holisbim;
        pdc.contenidos=params.contenidos;
        Pdc.findOne({material:material,bimestre:bimestre}).exec((err, valor) => {
            if(err){
                res.status(500).send({message: 'Error al comprobar el usuario'});
            }else{
                if(!valor){
                    pdc.save((err, pdcStored) => {
                        if(err){
                            res.status(500).send({message:'Se ha producido un error en el servidor'});
                        }else{
                            if(!pdcStored){
                                res.status(404).send({message:'No se ha logrado registrar el pdc'});
                            }else{
                                res.status(200).send({valor:pdcStored});
                            }
                        }
                    });
                }else{
                    res.status(200).send({
                        message: 'ya existe el pdc'
                    });
                }
            }
        });  
        
    }else{
        res.status(200).send({message:'Se han detectado datos en blanco'});
    }    
}

function getPdc(req, res){
    var persona=req.params.id; 
    var curso=req.params.curso; 
    var materia=req.params.materia;   
    Pdc.find({personal:persona,curso:curso,materia:materia}).exec((err, valor) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!valor){
                res.status(404).send({message:'No se ha encontrado coincidencias con lo que ha requerido'});
            }else{
                res.status(200).send({valor});
            }
        }
    });
    
}


function updatePdc(req, res){
    var id=req.params.id;
    var update=req.body;
    console.log(id);
    console.log(update);
    Pdc.findByIdAndUpdate(id, update, {new:true}, (err, valor) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!valor){
                res.status(404).send({message:'Se ha logrado cumplir con su peticion'});
            }else{
                res.status(200).send({valor:valor});
            }
        }
    });
}

function updatePersonal(req, res){
    var personaId=req.params.id;
    var update=req.body;

    Pdc.findByIdAndUpdate(personaId, update, {new:true}, (err, personalUpdate) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!personalUpdate){
                res.status(404).send({message:'Se ha logrado cumplir con su peticion'});
            }else{
                res.status(200).send({valor:personalUpdate});
            }
        }
    });
}

module.exports={
    savePdc,
    getPdc,
    updatePdc,
    updatePersonal
}