psql -c "DROP DATABASE tech_jobs_db"

psql -c "CREATE DATABASE tech_jobs_db"

sequelize db:migrate

# npm test
