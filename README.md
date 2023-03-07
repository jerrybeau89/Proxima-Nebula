# Proxima-Nebula
Repo that provides a job listing search page for users, and for employers allows for posting of jobs.

## Description
Project 2 - As we enter the last phase of the bootcamp we will want to display collaboration efforts that show not only do we know how to work independently but also collaborate with others. For this project groups are tasked with using everything we have learned over the past six weeks and create a real-world full-stack application that we can showcase to any potential employer. 

Contributors: Jerry Baggett, Jordan Lor, Cedar Williams, Peter Del Sol, Andy Abebaw.

## Project Requirements

Use Node.js and Express.js to create a RESTful API.
Use Handlebars.js as the templating engine.
Use MySQL and the Sequelize ORM for the database.
Have both GET and POST routes for retrieving and adding new data.
Be deployed using Heroku (with data).
Use at least one new library, package, or technology that we haven’t discussed.
Have a polished UI.
Be responsive.
Be interactive (i.e., accept and respond to user input).
Have a folder structure that meets the MVC paradigm.
Include authentication (express-session and cookies).
Protect API keys and sensitive information with environment variables.
Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

Finally, you must add your project to the portfolio that you created in Module 2.

## User Story
As A developer who creates full-stack web applications, I WANT a web application that will allow users to view job postings based on keywords after they have signed into the site, and allow employers to post new job reqs.

## Acceptance Criteria
GIVEN a web application that requires user authentication (Sign-in)
WHEN I log in
THEN I am presented with a search bar to search for job postings with the following information: Job title, Salary, Job description.
THEN I am also able to post job reqs as the employer.

## Installation
You can start searching for the job you want, where you will be surrounded by like minded invdividuals just sign-in to your account on our deployed website [https://careerfindr.herokuapp.com/]

### TO RUN LOCALLY
1. Clone/download the code in this repo
2. Navigate to the location of the code downloaded in your terminal
3. Create ".env" file
4. Run the following commands in your terminal:
```git
    4a. npm i
    4b. From the db file folder, open a terminal and run the following command: source schema.sql;
    4c. in the root directory of the application with the terminal run: npm i, npm run seed, and finally npm start.
```

## Deployment
Github repo: https://github.com/jerrybeau89/Proxima-Nebula

Presentation Slide: https://docs.google.com/presentation/d/1AxMALc2SmMAyfdp3ltr5kZSD9eG2V_SOd2tyyjyWlf8/edit?usp=sharing

Heroku Link: https://careerfindr.herokuapp.com/