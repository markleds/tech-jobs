'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('Jobs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            api_id: {
                type: Sequelize.STRING
            },
            api_num: {
                type: Sequelize.BOOLEAN
            },
            api_job_id: {
                type: Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },
            date_created: {
                type: Sequelize.STRING
            },
            job_type: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            company_name: {
                type: Sequelize.STRING
            },
            has_company_logo: {
              type: Sequelize.BOOLEAN
            },
            company_logo: {
                type: Sequelize.STRING
            },
            company_url: {
                type: Sequelize.STRING
            },
            location: {
                type: Sequelize.STRING
            },
            apply_url: {
                type: Sequelize.TEXT
            },
            api_logo: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('Jobs');
    }
};
