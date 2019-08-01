

module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {

   userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

   vehicleId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

      ratingNumber:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

     review:{
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



  Review.associate = function (models) {
    Routine.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};
