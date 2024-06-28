module.exports = function (sequelize, DataTypes) {
    const Sent_email = sequelize.define('Sent_email',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        userType: {
          type: DataTypes.String,
          allowNull: false
        },
        emailTemplate: {
          type: DataTypes.STRING,
          allowNull: false
        },
        sendAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
        readedAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
        uuid: {
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
        tableName: 'sent_emails',
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
  
    Sent_email.associate = function (models) {
     
    }
  
    return Sent_email
  }