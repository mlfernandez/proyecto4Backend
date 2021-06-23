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
      // orderId:{
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Orders',
      //     key: 'id',
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      name: {
        type: Sequelize.STRING
      },
      last_name1: {
        type: Sequelize.STRING
      },
      last_name2: {
        type: Sequelize.STRING
      },
      country: {
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
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      birthday: {
        type: Sequelize.DATE
      },
      dni: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isSuscriptionActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
/*       creditCardNumber: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      creditCardName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      creditCardExpDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      creditCardSecureCodeNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, */
      token: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};