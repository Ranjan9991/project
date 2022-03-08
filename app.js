const express = require("express");
var routes = require("./routes");
const app = express();
app.use("/",routes)
app.listen( process.env.PORT || 3000)