const userController = require('./usersController');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = "Esto es lo mas dificil del bootcamp";


class LoginController {
    async validate(emailCheck,passwordCheck){

        let user = await userController.findByEmail(emailCheck);

        if (user == null) {
            throw new Error("El password o el email son incorrectos Usuario Null.");
          }
        let password = user.password;

        let verificar = await bcryptjs.compare(passwordCheck,password);

        if (!user.isActive) {
            throw new Error("La cuenta no está activa. Por favor, revisa tu correo electrónico y activa tu cuenta.");
          }

        if(!verificar){
            throw new Error("El password o el email no coinciden");
            
        }

  

        let payload = {
            userId : user.id,
            createdAt: new Date(),
            isAdmin: user.isAdmin
        };

        return jwt.sign(payload,secret);

    }
}

let loginController = new LoginController();
module.exports = loginController;