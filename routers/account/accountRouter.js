const path = require('path');
const express = require('express');
const accountRouter = express.Router();
const signUp = require(path.join(__dirname,'routeFunctions','signUp'));
const login = require(path.join(__dirname,'routeFunctions','login'));
const logout = require(path.join(__dirname,'routeFunctions','logout'));


accountRouter.route('/signup').post(signUp);

accountRouter.route('/login').post(login);

accountRouter.route('/logout').get(logout);

module.exports = accountRouter;