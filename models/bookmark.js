
module.exports = function(sequelize, DataTypes) {
  var Bookmark = sequelize.define("Bookmark", {


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


  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

     Bookmark.belongsTo(models.Listing, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Bookmark;
};