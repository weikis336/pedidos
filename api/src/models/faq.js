module.exports = function (sequelize, DataTypes) { // module.exports exporta; y se importa con "require"
  const Faq = sequelize.define('Faq',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      description: {
        type: DataTypes.TEXT,
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
      tableName: 'faqs',
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

  return Faq
}
