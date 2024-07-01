module.exports = function (sequelize, DataTypes) {
    const Price = sequelize.define('Price',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
       basePrice: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        current: {
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
        tableName: 'prices',
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
            name: 'productId_fk',
            using: 'BTREE',
            fields: [
              { name: 'productId' }
            ]
          }
        ]
      }
    )
  
    Price.associate = function (models) {
      Price.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' })
      Price.hasMany(models.SaleDetail, { as: 'saleDetails', foreignKey: 'priceId' })
    }
  
    return Price
  }