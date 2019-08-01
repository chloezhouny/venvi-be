

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {

   sellerId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

  price:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

     image:{
      type: DataTypes.STRING,
      allowNull: false,
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
  };

  return Listing;
};