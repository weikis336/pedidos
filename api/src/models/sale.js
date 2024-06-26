module.exports = function (sequelize, DataTypes) {
    const Sale = sequelize.define('Sale',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        customerid: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        reference: {
          type: DataTypes.STRING,
          allowNull: false
        },
        total_Base_Price: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        sale_Date: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        sale_Time: {
          type: DataTypes.STRING,
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
        tableName: 'sales',
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
          }
        ]
      }
    )
  
    Sale.associate = function (models) {
     
    }
  
    return Sale
  }