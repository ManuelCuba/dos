'use strict'

var express=require('express');
var PdcController=require('../controllers/pdc');
var api=express.Router();
var md_auth=require('../middlewares/authenticated');
//var md_admin=require('../middlewares/is_admin');

api.post('/pdc/:id/:bim/:persona/:curso/:materia',md_auth.ensureAuth, PdcController.savePdc);
api.get('/pdc/:id/:curso/:materia',md_auth.ensureAuth, PdcController.getPdc);
api.put('/pdc/:id', md_auth.ensureAuth, PdcController.updatePersonal);

module.exports=api;