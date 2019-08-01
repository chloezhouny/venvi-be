module.exports = function(sequelize, DataTypes) {
  var Vehicle = sequelize.define("Vehicle", {
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

     price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

     image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
},
   {
  freezeTableName: true,
  timestamps: false
});

   Vehicle.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Vehicle.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return Vehicle;
};


