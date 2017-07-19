if [ $# -eq 0 ]
    then
        echo "You must specify a Heroku app name!"
        exit 1
fi

echo "Building with React Slingshot..."

npm run build

mkdir deployment

cp -r ./dist ./deployment

cp ./Procfile ./deployment/Procfile

cp ./package.json ./deployment/package.json

cp ./index.js ./deployment/index.js

cd deployment

git init

git add -A

git commit -m "Deploying"

heroku git:remote -a $1

git push heroku master --force

cd ..

rm -rf ./deployment

echo "Deployment to Heroku complete!"
