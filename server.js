const express = require('express');
const logger = require('morgan');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
var jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());

app.set('secretKey', 'nodeRestApi'); // jwt secret token
const OktaJwtVerifier = require('@okta/jwt-verifier');

const clientId = "0oac8ilw2p7HALK9u5d6";
const oktaDomain = 'https://dev-19656455.okta.com'

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const passport = require('./routes/passport') ;
const users = require('./routes/users');

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `${oktaDomain}/oauth2/default`,
  clientId: clientId
});

// public route
app.use('/users', verifyToken, users);

// private route
app.use('/passport', verifyToken, (req, res) => {
  oktaJwtVerifier.verifyAccessToken(req.token)
    .then(jwt => {
      passport(req, res)
    })
    .catch(err => {
      res.status(403).send({status:"error", message: err, data:null});
    });
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    // Forbidden
    res.status(403).send({status:"error", message: 'Okta Token not provided or invalid', data:null});
  }
}

app.listen(3000, function(){
	console.log('Node server listening on port 3000');
});
