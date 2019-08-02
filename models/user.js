module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        len: [1],
        isEmail: true
      },
      allowNull: false
    },
    profileID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false
    });

  User.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Listing, {
      onDelete: "cascade"
    });

    User.hasMany(models.Bookmark, {
      onDelete: "cascade"
    });

  };

  return User;
};


