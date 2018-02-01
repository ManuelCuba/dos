'use strict'

//var path=require('path');
//var fs=require('fs');
var mongoosePaginate=require('mongoose-pagination');

var User=require('../models/user');
var Institucion=require('../models/institucion');
var Personal=require('../models/personal');
var Curso=require('../models/curso');
var Materia=require('../models/materia');
var Material=require('../models/material');

function saveMaterial(req, res){
    var personaId=req.params.id;
    var material=new Material();
    var params=req.body;    
    if(params.user){
        material.personal=personaId;
        material.psp=params.psp;
        material.gestion=params.gestion;
        
        
        material.save((err, materialStored) => {
            if(err){
                res.status(500).send({message:'Se ha producido un error en el servidor'});
            }else{
                if(!materialStored){
                    res.status(404).send({message:'No se ha logrado registrar el material'});
                }else{
                    res.status(200).send({material:materialStored});
                }
            }
        });
    }else{
        res.status(200).send({message:'Se han detectado datos en blanco'});
    }    
}

function getMaterial(req, res){
    var persona=req.params.id; 
    var curso=req.params.curso; 
    var materia=req.params.materia;    
    var gestion=req.params.gestion;
    Material.find({personal:persona,curso:curso,materia:materia,gestion:gestion}).populate({path:'curso'}).populate({path:'materia'}).exec((err, valor) => {
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


function updateMaterial(req, res){
    var id=req.params.id;
    var update=req.body;
    Material.findByIdAndUpdate(id, update, {new:true}, (err, material) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!material){
                res.status(404).send({message:'Se ha logrado cumplir con su peticion'});
            }else{
                res.status(200).send({valor:material});
            }
        }
    });
}

module.exports={
    saveMaterial,
    getMaterial,
    updateMaterial
}