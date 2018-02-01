'use strict'

var express=require('express');
var BibliaController=require('../controllers/biblia');
var api=express.Router();
var md_auth=require('../middlewares/authenticated');
//var md_admin=require('../middlewares/is_admin');

api.get('/biblia',md_auth.ensureAuth, BibliaController.getBiblia);

module.exports=api;