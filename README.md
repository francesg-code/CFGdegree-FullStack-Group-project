# Full-stack CFGdegree Group 2: Happy Bodies Anywhere (HBA)
> This project is a web app designed to be used independently by children with diabetes to find out the carbohydrate amount in different foods, as well as to calculate and log the insulin dose needed. We developed HBA with mobile access in-mind to ensure the best user experience and to encourage use of the web-app from anywhere - something that is essential for our end-users who may be looking for more independence in managing their insulin doses especially when away on trips. 

> Live demo [_here_](https://happy-bodies-anywhere.netlify.app/). (please note, the features requiring database connection are not fully functional on this walk through)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Acknowledgements](#acknowledgements)


## General Information
- The web-app allows users to find the amount of carbohydrates in specific foods, calcuate the correct insulin dose based on the amount of carbohydrates, and save that insulin dose to their account so that a parent or carer will be able to refer to it if needed.
- Diabetes is an increasingly common long-term illness. This project seeks to facilitate independence for children and teenagers who may use the web-app whilst away from home, and provide confidence and reassurance to parents and carers who can review the insulin dose being taken at a particular time. 
- This Group project was undertaken as part of the Code First Girls Full-Stack degree.


## Technologies Used
- Coding languages: React, CSS, Node.js (inc. express).
- Databases: Google Firebase/Firestore (for user accounts), MySQLWorkbench for Food Calculator database
- Packages: This project requires the following packages which can be installed by navigating to the react-frontend directory and running `npm install` in a terminal:

    - react bootstrap
    - @reduxjs/toolkit react-redux
    - @fortawesome/fontawesome-svg-core
    - @fortawesome/free-solid-svg-icons
    - @fortawesome/react-fontawesome
    - @fortawesome/free-brands-svg-icons
    - react-test-renderer
    - firebase
    - react-firebase-hooks

## Features

- Calculate insulin dose
- Food calculator - find carbohydrate content for a specific food
- Save latest insulin dose along with time taken
- Information about Diabetes


## Setup

To get started with the project, please download the repository and open in a code editor such as VS Code.

> First, set up the database and server.
- Navigate to the server directory (Fullstack_Nanodegree_Group2/server).
- In the server directory, copy the contents of the create-database.sql file and paste them into MySQLWorkbench to create the Food Calculator database locally. 
- In server/index.js, please add your MySQLWorkbench password to the database config e.g.

    ```
    const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hba",
    });
    ```
- Open a terminal in VS Code, navigate to the `Fullstack_Nanodegree_Group2/server` directory.
- Run the command ```npm install``` in the terminal to install the necessary packages.
- To run the server on port 3001, please run the command `node index.js`. You should see 'server running' output in the terminal.

> Next, start the react-app.
- Open a second terminal in VS Code using the + icon and navigate to the react-frontend directory (Fullstack_Nanodegree_Group2/react-frontend)
- Run the command ```npm install``` in the terminal to install the necessary packages.
- Run the command ```npm run start``` to start the react-app. It will run on port 3000 by default and can be accessed by going to http://localhost:3000.

> Finally, run the unit tests.
- Within the `Fullstack_Nanodegree_Group2/react-frontend` directory, run the command `npm run test`. There are two test files, `Fullstack_Nanodegree_Group2/react-frontend/src/Layout/Buttons/Button.test.js` and `Fullstack_Nanodegree_Group2/react-frontend/src/Pages/Insulin/UpdateInsulinDose.test.js`. 


## Usage
- The main features of the web-app such as the food calculator and insulin dose calculator can be accessed without logging in for ease of use. 
- The food calculator depends on the local MySQL database, and so it will be nessecary to refer to the food_name column in the database to check which foods are currently availiable such as 'apple', 'sandwich' or 'glucogel'. The food calculator will return the matching carbohydrate content for each of these foods. Please use the refresh button after each search to clear the previous results.
- The insulin dose calculator takes the carbohydrate amount and calculates the insulin dose needed. Please see the 'Background' section of the Project Report for further details on how this calculation is performed.
- The further reading section includes a useful video on how to test blood sugar levels, and links to sites with further information.
- Sign-in and sign-up pages allow a user to create an account. The password must be at least six characters in length. The account is authenticated using Google Firebase. Once logged in, they will be able to save their latest insulin dose along with the time it was taken. This information can then be accessed via the Parents section. In this current version, the same login credentials are used by the parent to access the child's data.
 
 > Test login:
 - Email: `harrypotter@gmail.com`
 - Password: `abc123!`

> Example foods from the Food calculator database include: 
- `Sandwich`, `Apple`, `Chips`

## Acknowledgements
- Many thanks to our CFGdegree instructors for all of their help. We hope we've done you proud! 
