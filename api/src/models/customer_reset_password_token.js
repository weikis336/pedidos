module.exports = function (sequelize, DataTypes) {
    const customerResetPasswordTokens = sequelize.define('CustomerResetPasswordToken',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        customerId: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: false,
          allowNull: false
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        expirationDate: {
          type: DataTypes.DATE,
          allowNull: false
        },
        used: {
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
        tableName: 'customer_reset_password_tokens',
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
            name: 'customerId_fk',
            using: 'BTREE',
            fields: [
              { name: 'customerId' }
            ]
          }
        ]
      }
    )
  
    customerResetPasswordTokens.associate = function (models) {
     
    }
  
    return customerResetPasswordTokens
  }