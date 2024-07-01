module.exports = function (sequelize, DataTypes) {
    const UserResetPasswordTokens = sequelize.define('UserResetPasswordToken',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        userId: {
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
        tableName: 'user_reset_password_tokens',
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
            name: 'userId_fk',
            using: 'BTREE',
            fields: [
              { name: 'userId' }
            ]
          }
        ]
      }
    )
  
    UserResetPasswordTokens.associate = function (models) {
     
    }
  
    return UserResetPasswordTokens
  }