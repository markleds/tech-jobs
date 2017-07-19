'use strict';
const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        underscored: true,
        classMethods: {
            associate: function(models) {
              User.hasMany(models.Journal, {
                  foreign_key: "user_id",
                  onDelete: "CASCADE"
              });
            }
        },
        hooks: {
          beforeCreate: function(user, options, cb) {
            user.password = bcrypt.hashSync(user.password, 10);
            cb();
          }
        }
    });
    return User;
};
