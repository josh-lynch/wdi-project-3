const express     = require('express');
const app         = express();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { dbURI, port }    = require('./config/environment');
const routes      = require('./config/routes');

mongoose.connect(dbURI);

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));

app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
