
module.exports = function(sequelize, DataTypes) {
  var Bookmark = sequelize.define("Bookmark", {
    vin: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }, 
     time: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
  },
  {
  freezeTableName: true, 
  timestamps: false
});


  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

     Bookmark.belongsTo(models.Listing, {
      foreignKey: 'ListingId' 
    });
  };

  return Bookmark;
};