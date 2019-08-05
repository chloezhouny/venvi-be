module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {

  price:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

     image:{
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        len: [1],
      }
    }

  },
  {
  freezeTableName: true, 
  timestamps: false
});


  Listing.associate = function (models) {
    Listing.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Listing.hasOne(models.Bookmark, 
      {
        foreignKey: 'ListingId' 
      });
  };

  return Listing;
};