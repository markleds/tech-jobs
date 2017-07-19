'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Interviews', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            journal_id: {
                type: Sequelize.INTEGER
            },
            interview_date: {
                type: Sequelize.DATE
            },
            interviewer_name: {
                type: Sequelize.STRING
            },
            interviewer_position: {
                type: Sequelize.STRING
            },
            interviewer_email: {
                type: Sequelize.STRING
            },
            interviewer_phone: {
                type: Sequelize.STRING
            },
            interview_notes: {
                type: Sequelize.TEXT
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('Interviews');
    }
};
