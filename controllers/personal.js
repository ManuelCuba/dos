'use strict'

//var path=require('path');
//var fs=require('fs');
var mongoosePaginate=require('mongoose-pagination');

var User=require('../models/user');
var Institucion=require('../models/institucion');
var Personal=require('../models/personal');
var Curso=require('../models/curso');
var Material=require('../models/material');
var async = require('async');

var incial12=new Array("(1Secc) ACTIVIDADES PRODUCTIVAS DE LA FAMILIA EN EL ENTORNO INMEDIADO\n\n(2Secc) -	ACTIVIDADADES PRODUCTIVAS Y COMUNICATIVAS DE LA FAMILIA","(1Secc) •	FAMILIA Y SALUD COMUNITARIA EN RELACION CON EL ENTORNO INMEDIATO\n\n(2Secc) -	LA FAMILIA Y SU RELACIÓN CON EL ENTORNO NATURAL Y SOCIOCULTURAL");
var primaria12=new Array("(Primero) -LA COMUNICACIÓN EN LA FAMILIA EN LA ESCUELA Y EN LAS ACTIVIDADES DE LA COMUNIDAD.\n\n(Segundo) -	PRINCIPIOS DE CONVIVIENCIA EN COMUNIDAD.\n\n(Tercero) -	PRINCIPIOS DE CONVIVENCIA EN COMUNIDAD\n\n(Cuarto) -	DIVERSIDAD SOCIOCULTURAL Y SU RELACIÓN CON EL ECOSISTEMA DE LA REGIÓN.\n\n(Quinto) -	IDENTIDAD CULTURAL Y FORMAS DE PRODUCCIÓN\n\n(Sexto) -	SISTEMA DE ORGANIZACIÓN SOCIOPOLÍTICA EN LOS PUEBLOS DEL ABYA YALA","(Primero) -	CONVIVENCIA FAMILIAR Y PRACTICAS PRODUCTIVAS EN LA COMUNIDAD.\n\n(Segundo) -	POTENCIALIDADES PRODUCTIVAS Y FACTORES CLIMATICOS EN LA COMUNIDAD.\n\n(Tercero) -	PRODUCCIÓN EN EL MUNICIPIO EN EQUILIBRIO CON LA NATURALEZA.\n\n(Cuarto) -	PRINCIPIOS ÉTICOS MORALES EN LAS DIVERSAS RELACIONES ECÓNOMICA DE LA REGIÓN.\n\n(Quinto) -	PRODUCCIÓN Y SEGURIDAD ALIMENTARIA EN EL ESTADO PLURINACIONAL.\n\n(Sexto) -	DESARROLLO E INTERCAMBIO DE LA CIENCIA, TECNOLOGIA Y ARTES DEL ESTADO PLURINACIONAL EN EL CONTEXTO DEL ABYA YALA.");
var secundaria12=new Array("(Primero) -	DESCOLONIZACIÓN Y CONSOLIDACIÓN SOCIOCULTURAL ECONÓMICA Y TECNOLÓGICA DE NUESTROS PUEBLOS Y NACIONES.\n\n(Segundo) -	RECONOCIMIENTO DE LAS VOCACIONES Y POTENCIALIDADES PRODUCTIVAS TERRITORIALES Y SOCIOCULTURALES.\n\n(Tercero) -	RECUPERACIÓN DE TECNOLOGÍAS PRODUCTIVAS Y PROCESOS SOCIOCULTURALES DE NUESTRA REGIÓN.\n\n(Cuarto) -	VALORACIÓN DE LAS TECNOLOGÍAS CULTURALES APLICADAS A LA PRODUCCIÓN DE NUESTRO ENTORNO.\n\n(Quinto) -	DESARROLLO DE CAPACIDADES PRODUCTIVAS Y TECNOLOGÍAS SUSTENTABLES.\n\n(Sexto) -	DESARROLLO DE CAPACIDADES CIENTIFICAS Y TECNOLÓGICAS CON VALORES SOCIOCOMUNITARIOS.","(Primero) -	IDENTIFICACIÓN Y ANALISIS DE LOS PROCESOS SOCIOCULTURALES, NATURALES Y PRODUCTIVOS DEL ABYA YALA.\n\n(Segundo) -	ORIENTACIÓN Y FORMACIÓN VOCACIONAL DE ACUERDO A LAS POTENCIALIDADES TERRITORIALES.\n\n(Tercero) -	ANÁLISIS DE LA PRODUCCIÓN Y EL USO DE LA TECNOLOGÍA Y SUS EFECTOS EN LOS SERES VIVOS.\n\n(Cuarto) -	INNOVACIÓN Y DESARROLLO DE TECNOLOGÍAS PROPIAS ADECUADAS A NUESTRA REGIÓN.\n\n(Quinto) -	APLICACIÓN DE PROCESOS PRODUCTIVOS SOCIOCOMUNITARIOS SUSTENTABLES.\n\n(Sexto) -	PLANIFICACIÓN Y EJECUCIÓN DE EMPRENDIMIENTOS PRODUCTIVOS EN LA COMUNIDAD.");
var campos="COSMOS Y PENSAMIENTO\n\nCOMUNIDAD Y SOCIEDAD\n\nVIDA, TIERRA Y TERRITORIO\n\nCIENCIA TECNOLOGIA Y PRODUCCION";

function prueba(req, res){
    res.status(200).send({message:'mensaje de personal'});
}
//guardar personal de institucion
function savePersonal(req, res){
    var personal=new Personal();
    var params=req.body;    
    if(params.user){
        personal.user=params.user;
        personal.institucion=params.institucion;
        personal.roles=params.roles;        
        personal.materia=params.materia;        
        personal.gestion=params.gestion;
        personal.vigencia=params.vigencia;  
        personal.turno=params.turno;
        personal.paralelo=params.paralelo;
        personal.nivel=params.nivel;
        personal.curso=params.curso;
        personal.cursos=null;
        personal.materias=null;
        personal.save((err, personalStored) => {
            if(err){
                res.status(500).send({message:'Se ha producido un error en el servidor'});
            }else{
                if(!personalStored){
                    res.status(404).send({message:'No se ha logrado registrar el personal'});
                }else{
                    res.status(200).send({personal:personalStored});
                }
            }
        });
    }else{
        res.status(200).send({message:'Se han detectado datos en blanco'});
    }    
}

//guardar personal de institucion como estudiante
function saveEstudiante(req, res){
    var personal=new Personal();
    var params=req.body;   
    var cur; 
    if(params.user){
        personal.user=params.user;
        personal.institucion=params.institucion;
        personal.roles=params.roles;        
        personal.materia=params.materia;        
        personal.gestion=params.gestion;
        personal.vigencia=params.vigencia;  
        personal.turno=params.turno;
        personal.paralelo=params.paralelo;
        personal.nivel=params.nivel;
        personal.curso=params.curso;
        personal.tipo=params.tipo;
        if(params.roles=='tutor'){
            personal.cursos=null;
        }else{
            personal.cursos=params.cursos;
            cur=personal.cursos;
        }
        
        personal.materias=null;
        personal.save((err, personalStored) => {
            if(err){
                res.status(500).send({message:'Se ha producido un error en el servidor'});
            }else{
                if(!personalStored){
                    res.status(404).send({message:'No se ha logrado registrar el personal'});
                }else{
                    res.status(200).send({personal:personalStored});
                    
                }
            }
        });
    }else{
        res.status(200).send({message:'Se han detectado datos en blanco'});
    }    
}


//metodo para listar todo el personal de la institucion
function getPersonal(req, res){
    var institucion=req.params.id;
    Personal.find({
        $or:[
            {roles:['admin']},   
            {roles:['profe']},
            {roles:['direc']},
            {roles:['secre']},
            {roles:['trabsoc']},
            {roles:['psico']},
            {roles:['contador']},
            {roles:'aux'},
            {roles:['reg']},
            {roles:['admp']},
            {roles:['auxsis']},
            {roles:['por']}
        ],$and:[{institucion:institucion}]}).populate({path:'user'}).exec((err, personal) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!personal){
                res.status(404).send({message:'No se ha encontrado un listado de personas'});
            }else{
                res.status(200).send({personal});
            }
        }
    });
}

//metodo para listar todo el personal estudiante de la institucion
function getPersonalSt(req, res){
    var institucion=req.params.id;
    Personal.find({
        $or:[            
            {roles:['stud']}
        ],$and:[{institucion:institucion}]}).populate({path:'user'}).exec((err, personal) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!personal){
                res.status(404).send({message:'No se ha encontrado un listado de personas'});
            }else{
                res.status(200).send({personal});
            }
        }
    });
}

//metodo para listar todo el personal estudiante de la institucion por curso
function getPersonalStCur(req, res){
    var institucion=req.params.id;
    var curso=req.params.curso;
    Personal.find({
        $or:[            
            {roles:['stud']}
        ],$and:[{institucion:institucion,cursos:curso}]}).populate({path:'user'}).exec((err, personal) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!personal){
                res.status(404).send({message:'No se ha encontrado un listado de personas'});
            }else{
                res.status(200).send({personal});
            }
        }
    });
}
//metodo para listar todo el personal tutor de la institucion
async function getPersonalTu(req, res){
    var institucion=req.params.id;
    Personal.find({
        $or:[         
            {roles:['tutor']}
        ],$and:[{institucion:institucion}]}).populate({path:'user'}).populate({path:'hijo.usuario'}).exec((err, personal) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!personal){
                res.status(404).send({message:'No se ha encontrado un listado de personas'});
            }else{
                res.status(200).send({personal});
            }
        }
    });
}
function gethijos(req, res){
    var institucion=req.params.id;
    Personal.find({
        $or:[         
            {roles:['stud']}
        ],$and:[{institucion:institucion}]}).populate({path:'user'}).populate({path:'cursos'}).populate('usuario hijo.usuario').exec((err,hijos) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!hijos){
                res.status(404).send({message:'No se ha encontrado un listado de personas'});
            }else{
                res.status(200).send({hijos});
            }
        }
    });
}

//metodo para mostrar una persona
function getPersona(req, res){
    var personaId=req.params.id;

    Personal.findById(personaId).populate({path:'user'}).populate({path:'cursos'}).populate({path:'materias'}).populate({path:'hijo.usuario'}).exec((err, persona) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!persona){
                res.status(404).send({message:'No se ha encontrado coincidencias con lo que ha requerido'});
            }else{
                res.status(200).send({persona});
            }
        }
    });
}

//metodo para mostrar roles de una persona en una institucion
function getPersonaIns(req, res){
    var institucionId=req.params.id;
    var userId=req.user.sub;
    Personal.find({user:userId,institucion:institucionId}).select(
        {
            'institucion':0,
            'user':0,
            '__v':0,
            'created':0,
            'aprobo':0,
            'deuda':0,
            'hijo':0
        }).exec((err, persona) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!persona){
                res.status(404).send({message:'No se ha encontrado coincidencias con lo que ha requerido'});
            }else{
                res.status(200).send({persona});
            }
        }
    });
}

//metodo para actualizar datos del personal
function updatePersonal(req, res){
    var personaId=req.params.id;
    var update=req.body;

    Personal.findByIdAndUpdate(personaId, update, {new:true}, (err, personalUpdate) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!personalUpdate){
                res.status(404).send({message:'Se ha logrado cumplir con su peticion'});
            }else{
                res.status(200).send({personal:personalUpdate});
            }
        }
    });
}
function agregaHijo(req, res){   
    var cur=req.params.id; 
    var datos=req.body;
    var personaId=datos.tutor;
    var hijoId=datos.hijo;
    var numero=datos.suma;
    if(numero==0){
        numero=0;
    }else{
        numero=1;
    }

    Personal.findById(personaId).exec((err, persona) => {
        
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!persona){
                res.status(404).send({message:'No se ha encontrado coincidencias con lo que ha requerido'});
            }else{
                persona.hijo.push({
                    usuario: hijoId
                });
                persona.save();
                //res.status(200).send({persona:persona});
                if(persona){
                    Curso.findByIdAndUpdate(cur, { $inc: { inscrito: numero } }, {new:true}, (err, cursoUpdate) => {
                        if(err){
                            res.status(500).send({message:'Se ha producido un error en la peticion'});
                        }else{
                            if(!cursoUpdate){
                                res.status(404).send({message:'No se ha logrado cumplir con su peticion'});
                            }else{
                                res.status(200).send({persona:cursoUpdate});
                            }
                        }
                    });
                }
            }
        }
    });
}

async function agregaCursoMateria(req, res){   
    var id=req.params.id; 
    var datos=req.body;
    var cursos=datos.cursos;
    var materias=datos.materias;
    var nivel;
    var institucion=req.user.institucion;

    Personal.findById(id).exec((err, persona) => {        
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!persona){
                res.status(404).send({message:'No se ha encontrado coincidencias con lo que ha requerido'});
            }else{
                persona.listacursos.push({
                    curso: cursos, materia:materias
                });
                persona.save();                
                buscarNivel(cursos,id).then((value) => {                   
                    nivel=value.nivel;                    
                    Material.findOne({personal:id,curso:cursos,materia:materias}).exec((err,personaIns) => {
                        if(err){
                            res.status(500).send({message:'Se ha producido un error'});
                        }else{
                            buscarInstitucion(institucion).then((value) => {
                                if(!personaIns){
                                    var material=new Material();                                    
                                    material.personal=persona._id;
                                    material.psp=value.pspactual;
                                    material.gestion=value.gestion;
                                    material.curso=cursos;
                                    material.materia=materias;
                                    if(nivel=='inicial'){    
                                        material.pabbim1temorientadora=incial12[0];
                                        material.pabbim1actglobalizante=value.b1des;
                                        material.pabbim1prodintegrador=value.b1inicial;
                                        material.pabbim1campo=campos;
                                        material.pabbim2temorientadora=incial12[0];
                                        material.pabbim2actglobalizante=value.b2des;
                                        material.pabbim2prodintegrador=value.b2inicial;
                                        material.pabbim2campo=campos;
                                        material.pabbim3temorientadora=incial12[1];
                                        material.pabbim3actglobalizante=value.b3des;
                                        material.pabbim3prodintegrador=value.b3inicial;
                                        material.pabbim3campo=campos;
                                        material.pabbim4temorientadora=incial12[1];
                                        material.pabbim4actglobalizante=value.b4des;
                                        material.pabbim4prodintegrador=value.b4inicial;
                                        material.pabbim4campo=campos;
                                    }
                                    if(nivel=='primaria'){    
                                        material.pabbim1temorientadora=primaria12[0];
                                        material.pabbim1actglobalizante=value.b1des;
                                        material.pabbim1prodintegrador=value.b1primaria;
                                        material.pabbim1campo=campos;
                                        material.pabbim2temorientadora=primaria12[0];
                                        material.pabbim2actglobalizante=value.b2des;
                                        material.pabbim2prodintegrador=value.b2primaria;
                                        material.pabbim2campo=campos;
                                        material.pabbim3temorientadora=primaria12[1];
                                        material.pabbim3actglobalizante=value.b3des;
                                        material.pabbim3prodintegrador=value.b3primaria;
                                        material.pabbim3campo=campos;
                                        material.pabbim4temorientadora=primaria12[1];
                                        material.pabbim4actglobalizante=value.b4des;
                                        material.pabbim4prodintegrador=value.b4primaria;
                                        material.pabbim4campo=campos;
                                    }
                                    if(nivel=='secundaria'){    
                                        material.pabbim1temorientadora=secundaria12[0];
                                        material.pabbim1actglobalizante=value.b1des;
                                        material.pabbim1prodintegrador=value.b1secundaria;
                                        material.pabbim1campo=campos;
                                        material.pabbim2temorientadora=secundaria12[0];
                                        material.pabbim2actglobalizante=value.b2des;
                                        material.pabbim2prodintegrador=value.b2secundaria;
                                        material.pabbim2campo=campos;
                                        material.pabbim3temorientadora=secundaria12[1];
                                        material.pabbim3actglobalizante=value.b3des;
                                        material.pabbim3prodintegrador=value.b3secundaria;
                                        material.pabbim3campo=campos;
                                        material.pabbim4temorientadora=secundaria12[1];
                                        material.pabbim4actglobalizante=value.b4des;
                                        material.pabbim4prodintegrador=value.b4secundaria;
                                        material.pabbim4campo=campos;
                                    }
                                    material.save((err, materialStored) => {
                                        if(err){
                                            res.status(500).send({message:'Se ha producido un error en el servidor'});
                                        }else{
                                            if(!materialStored){
                                                res.status(404).send({message:'No se ha logrado registrar el material'});
                                            }else{  
                                                res.status(200).send({material:materialStored,persona:persona});
                                            }
                                        }
                                    });
                                }else{                                    
                                    res.status(200).send({material:personaIns,persona:persona});
                                }
                            });
                        }
                    });
               
                });
            }
        }
    });
}
async function buscarNivel(curso,persona){
    var nivel=await Curso.findById(curso).exec((err,curs) =>{
        if(err)
            return handleError(err);
        return curs;
    });
    return nivel
}
async function buscarInstitucion(id){
    var institucion= await Institucion.findById(id).exec((err,inst) =>{
        if(err)
            return handleError(err);
        return inst;
    });
    return institucion;
}

async function getCurMatProfe(req, res){
    var id=req.params.id;
    Personal.findById(id).populate({path:'listacursos.curso'}).populate({path:'listacursos.materia'}).exec((err, lista) => {
        if(err){
            res.status(500).send({message:'Se ha producido un error en la peticion'});
        }else{
            if(!lista){
                res.status(404).send({message:'No se ha encontrado un listado de personas'});
            }else{
                res.status(200).send({lista});
            }
        }
    });
}

module.exports={
    prueba,
    savePersonal,
    getPersona,
    getPersonal,
    updatePersonal,
    getPersonaIns,
    agregaHijo,
    getPersonalSt,
    getPersonalTu,
    saveEstudiante,
    getPersonalStCur,
    gethijos,
    agregaCursoMateria,
    getCurMatProfe
}