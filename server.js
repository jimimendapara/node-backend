const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

var corsOptions = {
 // origin: "http://localhost:3000"
   // origin: "https://jimimendapara.github.io/creadit-card-manager"
  origin: "http://52.62.90.174",
  origin: "http://ec2-52-62-90-174.ap-southeast-2.compute.amazonaws.com",
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
//app.use(bodyParser.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

const db = require("./app/models");
 db.sequelize.sync();
//In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });


// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Jimi's application." });
});

require("./app/routes/card.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});