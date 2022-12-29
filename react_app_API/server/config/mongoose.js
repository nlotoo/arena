const mongoose = require('mongoose');
const { DB_PORT } = require("./config.js");

mongoose.set('strictQuery', true);

mongoose.connect(`mongodb://localhost:${DB_PORT}/tournirr`);
// mongoose.connect('mongodb+srv://root:MVWWKD4j3ym47CB9@cluster0.lnhwqsk.mongodb.net/tournir_react')
require("../schemes/USER");


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error2:'));
db.once('open', function () {
    console.log("DB CONNECTED");
});


module.exports = mongoose;