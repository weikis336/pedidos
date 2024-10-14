module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('Product',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "ProductID".'
          },
          notEmpty: {
            msg: 'Por favor, rellena el campo "ProductID".'
          }
        }
      },
      productCategoryId: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: false,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "ProductCategoryID".'
          },
          notEmpty: {
            msg: 'Por favor, rellena el campo "ProductCategoryID".'
          }
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Nombre".'
          },
          notEmpty: {
            msg: 'Por favor, rellena el campo "Nombre".'
          }
        }
      },
      reference: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Reference".'
          },
          notEmpty: {
            msg: 'Por favor, rellena el campo "Reference".'
          }
        }
      },
      units: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Unidades".'
          },
          notEmpty: {
            msg: 'Por favor, rellena el campo "Unidades".'
          }
        }
      },
      measurementUnit: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "UnidadesDeMedida".'
          },
          notEmpty: {
            msg: 'Por favor, rellena el campo "UnidadesDeMedida".'
          }
        }
      },
      measurement: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "measurement".'
          },
          notEmpty: {
            msg: 'Por favor, rellena el campo "measurement".'
          }
        }
      },
      visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "activado".'
          },
          notEmpty: {
            msg: 'Por favor, rellena el campo "activado".'
          }
        }
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'products',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'productCategoryId_fk',
          using: 'BTREE',
          fields: [
            { name: 'productCategoryId' }
          ]
        }
      ]
    }
  )

  Product.associate = function (models) {
    Product.belongsTo(models.ProductCategory, { as: 'productCategory', foreignKey: 'productCategoryId' })
    Product.hasMany(models.Price, { as: 'prices', foreignKey: 'productId' })
    Product.hasMany(models.SaleDetail, { foreignKey: 'productId' })
  }
  return Product
}
