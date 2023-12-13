// Setup Express Server
const express = require('express');
const routes = require('./routes/routes');
const app = express();
const port = 3000;

// Configure express to use JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
const router = express.Router();
routes(router);
app.use('/', router);
//
app.listen(port, () => console.log(`FSD app listening on port ${port}!`));
