<a name="top"></a>

<center> <h1>Backend Rental Movie</h1> </center>

---

:speech_balloon: [About](#id1)   

:hammer: [Tools](#id2)

:clipboard: [instructions](#id3)

:eye_speech_bubble: [Creating the Backend](#id4)

:mailbox: [Postman](#id5)

:smile: [Thanks](#id6)

---

<a name="id1"></a>
## **About**

Realización del backend para una futura aplicacion de alquiler de películas. 

Actualmente se realiza la busqueda de peliculas y series conectando con la API gratuita de **The Movie Database**.

Este proyecto es parte del bootcamp de **Full Stack Developer** de [GeeksHubs Academy](https://bootcamp.geekshubsacademy.com/).

---
**Fecha de inicio:** 19 Mayo de 2021.

**Fecha máxima de entrega:** 23 Mayo de 2021.

**Realizado por:**
* [Carlos Quintero](https://github.com/CarlosRQuinteroM)
* [Mariana Fernández Sacristán](https://github.com/mlfernandez)

---

<a name="id2"></a>
## **Tools**

Para la realización de este trabajo contamos con las siguientes herramientas y tecnologías.

| <img src="img/logovisual.png" alt="Visual" width="30"/> | Visual Code Estudio |

| <img src="img/javascript2.png" alt="JavaScript" width="30"/> | JavaScript | 

| <img src="img/nodejs.png" alt="HTML5" width="30"/> | NODE JS & EXPRESS |

| <img src="img/axios.png" alt="CSS3" width="30"/> | AXIOS | 

| <img src="img/git.png" alt="Git" width="30"/> | Git |

| <img src="img/github2.png" alt="GitHub" width="30"/> | GitHub | 

| <img src="img/tmd.jpg" alt="GitHub" width="30"/> | The Movie Database API | 

| <img src="img/postman.png" alt="GitHub" width="30"/> | Postman | 


<a name="id3"></a>
## **Instructions**

1. <h6> Inicianizando Node Package Manager </h6>
(Debes tener instalado Node.js)
Using npm init from the command line initializes the project’s package.json file.

```javascript
npm init -y
```
2. <h6>Instalar la dependencia Axios </h6>
Axios is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node.js.

```javascript
npm i --save axios
```
3. <h6> Add "start":"node index.js" in the file package.json section "scripts"</h6>
```json
  "scripts": {
   "start": "node index.js", 
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

4. <h6>Install framework Express </h6>
Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.

```javascript
npm install express --save
```

5. <h6> Delete the ^ simbol in version on the file package.json </h6>
```json
"dependencies": {
    "axios": "^0.21.1",
    "express": "^4.17.1"
  },
```

6. <h6> Add index.js on the working folder</h6>

7. <h6> Add .gitignore on the working folder and inside write</h6>
```json
/node_modules
```
8. <h6>Now you can start working on the Backend!</h6>
>To know more about this See Creating the Backend below.

9. <h6>To conect to the server write on the terminal</h6>
```javascript
npm start
```
10. <h6>Now you can see the data on Postman.</h6>
>To know more about this see Postman below.

<a name="id4"></a>
## Creating the Backend

1. <h6>index.js</h6>
*  First we have to call Node Express
```javascript
const express = require('express');
```
* save and execute
```javascript
const app = express();
```
* and we declare the port where we are going to raise the server
```javascript
const port = 3000; 
```
* we save the constant router and match it to the require method and tell it that we import it from router.js
```javascript
const router = require('./router'); 
```
* Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.
express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: 
```javascript
app.use(express.json()); 
```
* mounts middleware for all routes of the app whith:
```javascript
app.use(router);  
```
* we raise and initialise the server
```javascript
app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
```



2. <h6>router.js</h6>

* First we have to call Node Express
```javascript
const router = require('express').Router();
```
* We call the files on the folder routes
```javascript
const moviesRouter = require('./routes/moviesRouter');
const seriesRouter = require("./routes/seriesRouter");
```
* This says that when the user puts the path where it should go
```javascript
router.use("/movies", movieRouter);
router.use("/series", seriesRouter);
```

* Finally we export this file
```javascript
module.exports = router;
```


3. <h6>utiles.js</h6>

In this file we found the functions that we need to call elsewhere.
In this case this is the function to translate the genre of the movies the user wants to search to the id needed for the endpoint of The movie database find it.
We add a case sensitive so that no matter how it is written it can be found anyway.
Finally we export this file, so we can use in others files.

```javascript
 const checkId = (nombre) => {
  let traductorGenero = [
    {
      id: 28,
      name: "action",
    ...
    {
      id: 37,
      name: "western",
    },
    
  ];
  
  for (let i = 0; i < traductorGenero.length; i++) {
    if (traductorGenero[i].name === nombre) {
      return traductorGenero[i].id
    }
  }
};
 
module.exports = checkId;
```


4. <h6>controllers</h6>

Controllers are the callback functions we passed to the router methods. 

We need one for each, Movies and Series.

First we call Axios, this is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node.js.

And the function we export in utiles.

```javascript
const axios = require("axios");
const checkId = require("../utiles");
```
Then we create the callbacks funtions with the endopoint to the The Movie Database.
This is an example in class Peliculas, a function to search the Top Rated Movies.

```javascript

class Peliculas {
  async findTopRated() {
    let res = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1"
    );

    return res.data;
  }

let moviesController = new Peliculas();
module.exports = moviesController;

```


5. <h6>routes</h6>

A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern.

```javascript
const router = require("express").Router();
const moviesController = require("../controllers/moviesController");
```
We have one for each Series and Movies, this is a example of one of this to search Top Rated Movies:

```javascript
router.get("/", async (req, res) => {
  try {
    res.json(await moviesController.findTopRated());
  } catch (err) {
    return res.status(500).json({
      mensaje: err.mensaje,
    });
  }
});

module.exports = router;
```

<a name="id5"></a>
## **Postman**

>Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/0bb02cfc04d105dd4329?action=collection%2Fimport)


<a name="id6"></a>
## **Thanks**

We would like to thank our teacher, David, for his help and dedication. And to our bootcamp partners for every help and suggestion received.

<br>
<br>

[Subir](#top)