'use strict'

var express=require('express');
var MaterialController=require('../controllers/material');
var api=express.Router();
var md_auth=require('../middlewares/authenticated');
//var md_admin=require('../middlewares/is_admin');

api.post('/material/:id',md_auth.ensureAuth, MaterialController.saveMaterial);
api.get('/material/:id/:curso/:materia/:gestion',md_auth.ensureAuth, MaterialController.getMaterial);
api.put('/material/:id', md_auth.ensureAuth, MaterialController.updateMaterial);

module.exports=api;