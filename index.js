const express = require("express");
const db = require("./db")
const app = express();
const port = 3000;
const router = require("./router");

//middelwares

app.use(express.json());
app.use(router);
db
.then(()=>{
  //Starting server

   app.listen(port, ()=> console.log(`Servidor levantado en http://localhost:${port}`));
  })
  .catch((err)=> console.log(err.message));   
