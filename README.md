# $tech => jobs   

[![Imgur](https://i.imgur.com/88xmGhNl.jpg)](https://tech-job.herokuapp.com/)

https://tech-job.herokuapp.com/

#### by [Mark Ledbetter](http://markledbetterdesigns.com/)

$tech => jobs is a single page web app where users can search for jobs in the tech industry by keyword and location (city/state) and if they find a job they are interested in, they can save it to their Journal where they will find a link to apply for the job. The Job Journal allows the user to keep track of the steps they've taken in the application process: date applied, application contact, interview info, etc.  
___
### Technologies Used  

 * React  
 * Node.js  
 * Express  
 * JSON Web Token  
 * Sequelize  
 * PostgreSQL  
 * CSS  
 * Heroku  
___
### API  
The app uses job data from two APIs:
 * [GitHub Jobs](https://jobs.github.com/api)
 * [Authenic Jobs](https://authenticjobs.com/api)
___
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
If you do not already have node.js installed on your computer, please visit https://nodejs.org/en/ to learn how to install it on your system.  

### Installing
 * Create a directory and download all of the files for the app into that directory.  
 * In the command line of the terminal, navigate in to the folder you have created.   
#### Initialize Node Back End  
In the command line of the terminal, navigate into the be-node folder and run the following commands:  
```
npm install
```
 * Once all of the dependencies have been downloaded to your computer you can run the following command to initialize a local server on your machine:  
```
node index.js
```
 * Open your web browser and type the following url into the address bar:
```
localhost:5000
```  
#### Initialize React Back End  
In the command line of the terminal, navigate into the fe-node folder and run the following commands:  
```
npm install
```

* Once all of the dependencies have been downloaded to your computer you can run the following command to initialize a local server on your machine:  
 ```
 npm start
 ```
* This should automatically open your web browser to view the site on the localhost server. If not you can go to your web browser and tpe the following url into the address bar:
```
localhost:5000
```
