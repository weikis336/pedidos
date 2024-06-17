module.exports = function (sequelize, DataTypes) {
    const Company = sequelize.define('Company',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        commercialAddres: {
          type: DataTypes.STRING,
          allowNull: false
        },
        commercialName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        fiscalAddres: {
          type: Sequelize.STRING,
          allowNull: false
        },
        fiscalName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        vatNumber: {
          type: Sequelize.STRING,
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
        tableName: 'companies',
        timestamps: true, //Guarda la fecha en la que se modifica el modelo
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
  
    Company.associate = function (models) {
     
    }
  
    return Company
  }