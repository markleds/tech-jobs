'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Journals', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            job_id: {
                type: Sequelize.INTEGER
            },
            api_id: {
                type: Sequelize.STRING
            },
            api_job_id: {
                type: Sequelize.STRING
            },
            applied: {
                type: Sequelize.BOOLEAN
            },
            date_applied: {
                type: Sequelize.DATE
            },
            contact_name: {
                type: Sequelize.STRING
            },
            contact_email: {
                type: Sequelize.STRING
            },
            contact_phone: {
                type: Sequelize.STRING
            },
            notes: {
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
        return queryInterface.dropTable('Journals');
    }
};
