module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define('Product',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        productCategoryId: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: false,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        reference: {
          type: DataTypes.STRING,
          allowNull: false
        },
        units: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        measurement_Unit: {
          type: DataTypes.STRING,
          allowNull: false
        },
        measurement: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        visible: {
          type: DataTypes.BOOLEAN,
          allowNull: false
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
            name: 'products_productCategoryId_fk',
            using: 'BTREE',
            fields: [
              { name: 'productCategoryId' }
            ]
          }
        ]
      }
    )
  
    Product.associate = function (models) {
    }
    return Product
  }