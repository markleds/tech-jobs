'use strict';

module.exports = function(sequelize, DataTypes) {
    var Interview = sequelize.define('Interview', {
        journal_id: DataTypes.INTEGER,
        interview_date: DataTypes.DATE,
        interviewer_name: DataTypes.STRING,
        interviewer_position: DataTypes.STRING,
        interviewer_email: DataTypes.STRING,
        interviewer_phone: DataTypes.STRING,
        interview_notes: DataTypes.TEXT
    }, {
        underscored: true,
        classMethods: {
            associate: function(models) {
                Interview.belongsTo(models.Journal, {
                    foreign_key: "journal_id",
                    onDelete: "CASCADE"
                });
            }
        }
    });
    return Interview;
};
