const { User } = require("../models");
const router = require("../routes/usersRouter");
const bcryptjs = require('bcryptjs');
const nodemailer = require('../config/nodemailerConfig.js');

class Person {
  async findAllUsers() {
    return User.findAll();
  }
  async findByEmail(email) {
    return User.findOne({
      where: { email },
    });
  }
    async findByUserId(id) {
      return User.findByPk(id);

  }
  async newUser(body) {
    let password = body.password;
    let passwordHashed = bcryptjs.hashSync(password, 10);
    body.password = passwordHashed;
    return User.create(body);
  }
  async modifyUser(cuerpoDeDatos) {
    return User.update(
      //datos que cambiamos
      {
        billing_address: cuerpoDeDatos.billing_address,
        shipping_address: cuerpoDeDatos.shipping_address,
        phone: cuerpoDeDatos.phone,
        city: cuerpoDeDatos.city,
        country: cuerpoDeDatos.country,
        birthday: cuerpoDeDatos.birthday
      },
      //donde
      { where: { id: cuerpoDeDatos.idUser } }
    );
  }
  async deleteUser(id) {
    return User.destroy({ where: { id: id } });
  }

  async createUser(user) {
    user.password = await bcrypt.hash(user.password, 10);

    //Creamos una token que enviamos por mail para activar
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let token = '';
    for (let i = 0; i < 25; i++) {
        token += characters[Math.floor(Math.random() * characters.length )];
    }
    
    user = {
      name : user.name,
      lastName1: user.lastName1,
      lastName2: user.lastName2,
      email: user.email,
      password: user.password,
      birthday: user.birthday,
      address: user.address,
      country: user.country,
      city: user.city,
      dni: user.dni,
      telephone: user.telephone,
      subscription: user.subscription,
      token: token
    }

    let usuario = await User.create(user);

    //Llamamos a la funcion para enviar el correo al usuario.
    await nodemailer.sendConfirmationEmail(user.name, user.email, token);

    return usuario;

  }

  async findByToken(token) {
    return User.findOne({ token: token });
  }

 //Función que recibe token de email y activa la cuenta del usuario.
 async updateActive(token) {
    let user = await userController.findByToken(token);
    let usuario = await User.findByIdAndUpdate(
    { _id: user._id },
    //Datos que cambiamos
    {
      isActive: true,
    },
    { new: true, omitUndefined: true }
  );
  let resultado = "La cuenta se ha activado correctamente. Por favor, ve a la web de xSmileFitness para entrar en tu área de usuario.";
  return resultado;
}


}
let usersController = new Person();
module.exports = usersController;
