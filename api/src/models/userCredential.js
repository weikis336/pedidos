module.exports = function (sequelize, DataTypes) {
    const UserCredentials = sequelize.define('UserCredential',
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
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastPasswordChange: {
          type: DataTypes.DATE,
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
        tableName: 'user_credentials',
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
  
    UserCredentials.associate = function (models) {
      UserCredentials.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
    }
  
    return UserCredentials
  }