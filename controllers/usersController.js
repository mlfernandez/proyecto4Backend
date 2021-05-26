//const axios = require("axios"); al no usar endpoints creo que no lo necesitamos

//const checkId = require("../utiles"); al no tener funciones en utiles no lo pondria

const { User } = require("../models");

class Person {

    async findAllUsers(){
        return User.findAll();
    }

    async signUpUser(user){
        
        return User.create(user);
    }

}


let usersController = new Person();
module.exports = usersController;