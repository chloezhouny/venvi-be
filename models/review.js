

module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {

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
    Review.belongsTo(models.Vehicle, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};
