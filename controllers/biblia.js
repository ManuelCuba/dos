'use strict'

//var path=require('path');
//var fs=require('fs');
var mongoosePaginate=require('mongoose-pagination');

var Biblia=require('../models/biblia');

function getBiblia(req, res){
    Biblia.find().exec((err, biblia) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!biblia){
                res.status(404).send({message:'No se ha encontrado un listado de integracion'});
            }else{
                res.status(200).send({biblia});
            }
        }
    });
}

module.exports={
    getBiblia
}
