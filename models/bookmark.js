
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
    vin: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }, 

     image:{
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        len: [1],
      }
    },

     make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
      model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
     year: {
      type: DataTypes.INTEGER,
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