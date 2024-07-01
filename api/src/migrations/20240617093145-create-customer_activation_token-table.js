'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customer_activation_tokens', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
     customerId: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expirationDate: {
        type: Sequelize.DATE,
        allowNull: false
      },

      used: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
      
    })
    await queryInterface.addIndex('customer_activation_tokens', ['customerId'], {
      name: 'customerId_index'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customer_activation_tokens')
  }
}