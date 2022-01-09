
const express = require("express");
const app = express();
const mongo = require('./shared/connect')
const furnitureDetailsRouter = require('./routes/furnitureDetails')
const customerDetailsRouter = require('./routes/customerDetails')
const cors = require("cors");
const authorize = require('./module/Authorize');

app.use(express.json());
mongo.connect();
app.use(cors());

//app.use(authorize.AuthorizeUser);
app.use('/customerDetails', customerDetailsRouter )
app.use('/furnitureDetails', furnitureDetailsRouter )



app.listen(3001);