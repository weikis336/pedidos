module.exports = function (sequelize, DataTypes) {
    const Fingerprint = sequelize.define('Fingerprint',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        customerId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        fingerprint: {
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
        tableName: 'fingerprints',
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
  
    Fingerprint.associate = function (models) {
      Fingerprint.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' })
      Fingerprint.hasMany(models.Contact, { as: 'contacts', foreignKey: 'contactId' })
    }
  
    return Fingerprint
  }