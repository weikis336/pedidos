module.exports = function (sequelize, DataTypes) {
    const User_credentials = sequelize.define('User_credential',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        userid: {
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
          }
        ]
      }
    )
  
    User_credentials.associate = function (models) {
     
    }
  
    return User_credentials
  }