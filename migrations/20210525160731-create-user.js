'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     /*  country: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      shipping_address: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.STRING
      }, */
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      /* phone: {
        type: Sequelize.INTEGER
      }, */
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dni: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },

      creditCardNumber: {
        type: Sequelize.STRING,
        
      },
      creditCardName: {
        type: Sequelize.STRING,
        
      },
      creditCardExpDate: {
        type: Sequelize.DATE,
        
      },
      creditCardSecureCodeNumber: {
        type: Sequelize.STRING,
        
      },
      token: {
        type: Sequelize.STRING,
        defaultValue: ""
      },

      lastSuscriptionBegin: {
        type: Sequelize.DATE,
       
      },

      lastSuscriptionEnd: {
        type: Sequelize.DATE,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },


    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};