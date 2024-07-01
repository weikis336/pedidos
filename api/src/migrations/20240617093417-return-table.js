'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('returns', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      saleId: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false
      },
      customerId: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false
      },

      reference: {
        type: Sequelize.STRING,
        allowNull: false
      },
      totalBasePrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      returnDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      returnTime: {
        type: Sequelize.TIME,
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

    await queryInterface.addIndex('returns', ['saleId'], {
      name: 'saleId_index'
    })
    await queryInterface.addIndex('returns', ['customerId'], {
      name: 'customerId_index'
    })
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('returns')
  }
}