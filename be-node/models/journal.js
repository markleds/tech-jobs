'use strict';

module.exports = function(sequelize, DataTypes) {
    var Journal = sequelize.define('Journal', {
        user_id: DataTypes.INTEGER,
        job_id: DataTypes.INTEGER,
        api_id: DataTypes.STRING,
        api_job_id: DataTypes.STRING,
        applied: {
          type: DataTypes.BOOLEAN, defaultValue: false
        },
        date_applied: {
          type: DataTypes.DATE,
          defaultValue: "2017/01/01"
        },
        contact_name: DataTypes.STRING,
        contact_email: DataTypes.STRING,
        contact_phone: DataTypes.STRING,
        notes: DataTypes.TEXT
    }, {
        underscored: true,
        classMethods: {
            associate: function(models) {
                Journal.hasMany(models.Interview, {
                    foreign_key: "journal_id",
                    onDelete: "cascade",
                    hooks: true
                });
                Journal.belongsTo(models.User, {
                    foreign_key: "user_id"
                });
                Journal.belongsTo(models.Job, {
                    foreign_key: "job_id"
                });

            }
        }
    });
    return Journal;
};
