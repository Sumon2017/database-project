const path = require('path');
const express = require('express');
const bloodDonationRouter = express.Router();
const available = require(path.join(__dirname,'routeFunctions','available'));
const notAvailable = require(path.join(__dirname,'routeFunctions','notAvailable'));
const updateLastDonation = require(path.join(__dirname,'routeFunctions','updateLastDonation'));
const bloodGroupList = require(path.join(__dirname,'routeFunctions','bloodGroupList'));
const bloodDonorList = require(path.join(__dirname,'routeFunctions','bloodDonorList'));
const auth = require(path.join(__dirname,'..','..','auth'));


bloodDonationRouter.route('/bloodgrouplist').post(bloodGroupList);

bloodDonationRouter.route('/blooddonorlist').post(bloodDonorList);

bloodDonationRouter.use(auth);

bloodDonationRouter.route('/available').get(available);

bloodDonationRouter.route('/notavailable').get(notAvailable);

bloodDonationRouter.route('/updatelastdonation').post(updateLastDonation);


module.exports = bloodDonationRouter;