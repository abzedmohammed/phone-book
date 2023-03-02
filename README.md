# Phone Book App

* This app allows users to perfomr the CRUD (Create Read Update and Delete) oprations on contacts. To update or delete a single contact, click on any of the contacts on the list and they will appear to the right of the screen.

## Setting Up Backend

* Backend database has been connected to AWS RDS however you need to run the server locally. The backend uses Ruby on Rails version 3.0.5

### Getting started

1. Download and Install Ruby and Ruby on Rails on your machine, prefferably Ruby version 3.0.5
2. Download and Install Docker to run the image for backend

### Running the backend app

* If you have docker, use the below command to run the backend

` docker run -d -p 3000:3000 abzed/contacts-backend `

* The app will run on localhost:3000

### Running the frontend

* You need npm installed on your machine locally then run:

` npm install ` to install required packages

* Run server with will run the app on localhost:4200

` ng serve `