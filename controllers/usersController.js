const { User } = require("../models");
const router = require("../routes/usersRouter");

class Person {
  async findAllUsers() {
    return User.findAll();
  }
  async findByEmail(email) {
    return User.findOne({
      where: { email },
    });
  }
  async findByUserId() {
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
      },
      //donde
      { where: { id: cuerpoDeDatos.id } }
    );
  }
  async deleteUser(id) {
    return User.destroy({ where: { id: id } });
  }
}
let usersController = new Person();
module.exports = usersController;
