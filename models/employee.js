const pg = require('pg');

client = new pg.Client({
    user: 'richardsh',
    password: 'r12345',
    host: 'localhost',
    port: 5432,
    database: 'employees'
}) 

client.connect()
module.exports.myconnection = client;