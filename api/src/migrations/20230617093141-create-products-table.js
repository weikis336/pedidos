'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      productCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products_categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false
      },

       units: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      measurement_Unit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      measurement: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      visible: {
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
    await queryInterface.addIndex('products', ['productCategoryId'], {
      name: 'products_productCategoryId_index'
    })
  },

  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products')
  }
}