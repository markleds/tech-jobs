'use strict';

module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define('Job', {
        api_id: DataTypes.STRING,
        api_num: DataTypes.BOOLEAN,
        api_job_id: DataTypes.STRING,
        title: DataTypes.STRING,
        date_created: DataTypes.STRING,
        job_type: DataTypes.STRING,
        description: DataTypes.TEXT,
        company_name: DataTypes.STRING,
        has_company_logo: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        company_logo: DataTypes.STRING,
        company_url: DataTypes.STRING,
        location: DataTypes.STRING,
        apply_url: DataTypes.STRING,
        api_logo: DataTypes.STRING
    }, {
        underscored: true,
        classMethods: {
            associate: function(models) {
              Job.hasMany(models.Journal, {
                  foreign_key: "job_id"
              });
            }
        }
    });
    return Job;
};
