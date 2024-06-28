module.exports = function (sequelize, DataTypes) {
    const Return = sequelize.define('Return',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        saleid: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: false,
          allowNull: false
        },
        customerid: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: false,
          allowNull: false
        },
        reference: {
          type: DataTypes.STRING,
          allowNull: false
        },
        totalBasePrice: {
          type: DataTypes.DECIMAL,
          allowNull: false
        },
        returnDate: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        returnTime: {
          type: DataTypes.TIME,
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
        tableName: 'returns',
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
  
    Return.associate = function (models) {
     
    }
  
    return Return
  }