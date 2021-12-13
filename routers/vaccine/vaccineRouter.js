const path = require('path');
const express = require('express');
const vaccineRouter = express.Router();
const getVaccineNames = require(path.join(__dirname,'routeFunctions','getVaccineNames'));
const myVaccineInfo = require(path.join(__dirname,'routeFunctions','myVaccineInfo'));
const addMyVaccine = require(path.join(__dirname,'routeFunctions','addMyVaccine'));
const addMyBooster = require(path.join(__dirname,'routeFunctions','addMyBooster'));
const delMyVaccine = require(path.join(__dirname,'routeFunctions','delMyVaccine'));
const auth = require(path.join(__dirname,'..','..','auth'));


vaccineRouter.use(auth);

vaccineRouter.route('/getvaccinenames').get(getVaccineNames);

vaccineRouter.route('/myvaccineinfo').get(myVaccineInfo);

vaccineRouter.route('/addmyvaccine').post(addMyVaccine);

vaccineRouter.route('/addmybooster').post(addMyBooster);

vaccineRouter.route('/delmyvaccine').post(delMyVaccine);


module.exports = vaccineRouter;