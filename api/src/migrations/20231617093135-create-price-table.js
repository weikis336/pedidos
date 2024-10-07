'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prices', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      priceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'prices',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      basePrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },

      current: {
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
    await queryInterface.addIndex('prices', ['productId'], {
      name: 'productId_index'
    })
    await queryInterface.addIndex('prices', ['priceId'], {
      name: 'priceId_index'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('prices')
  }
}
