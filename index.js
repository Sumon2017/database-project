const path = require('path');
const express = require('express');
const  connectDB  = require(path.join(__dirname,'connectDatabase','connectDb'));
require('dotenv').config();
const accountRouter = require(path.join(__dirname,'routers','account','accountRouter'));
const bloodDonationRouter = require(path.join(__dirname,'routers','bloodDonation','bloodDonationRouter'));
const vaccineRouter = require(path.join(__dirname,'routers','vaccine','vaccineRouter'));
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let port = 3001;

//connecting to mongodb atlas cloud
connectDB();

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/account/',accountRouter);
app.use('/blooddonation/',bloodDonationRouter);
app.use('/vaccine/',vaccineRouter);

app.listen(port,() => {
    console.log(`database project app listening at ${port}`);
}
);