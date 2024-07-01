module.exports = function (sequelize, DataTypes) {
    const SaleDetail = sequelize.define('SaleDetail',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        productId: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: false,
          allowNull: false
        },
        priceId: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: false,
          allowNull: false
        },
        productName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        basePrice: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        quantity: {
          type: DataTypes.INTEGER,
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
        tableName: 'sales_details',
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
          },
          {
            name: 'priceId_fk',
            using: 'BTREE',
            fields: [
              { name: 'priceId' }
            ]
          },
        ]
      }
    )
  
    SaleDetail.associate = function (models) {
      SaleDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'productId' })
      SaleDetail.belongsTo(models.Price, { as: 'price', foreignKey: 'priceId' })
    }
  
    return SaleDetail
  }