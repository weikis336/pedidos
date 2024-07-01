module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
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
        tableName: 'users',
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
  
    User.associate = function (models) {
      User.hasMany(models.UserActivationToken, { as: 'userActivationToken', foreignKey: 'userId' })
      User.hasMany(models.UserCredential, { as: 'userCredential', foreignKey: 'userId' })
      User.hasMany(models.UserResetPasswordToken, { as: 'userResetPassword', foreignKey: 'userId' })
    }
  
    return User
  }