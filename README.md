# Ywitter

This is a simple social networking platform cloning Twitter's key features built with React and NodeJS Express. With this application, users can leave simple posts and comments.

## Table of Contents

1. [Screen Shots/Demo](#screenshot)
2. [Usage](#usage)
3. [Technology Stack](#tech-stack)
4. [Reflection](#reflection)

## Screenshots <a name="screenshot"></a>

### User Authentication
![user](https://github.com/Potatojelly/Ywitter/assets/108857524/8e5091ef-1d47-4d8f-a55c-6962c2c7ad8f)

### Tweet CRUD Operation
![post](https://github.com/Potatojelly/Ywitter/assets/108857524/0777b84c-54bb-4078-a7ce-7f08ce3d65ba)

### View a particular user's tweets
![posts](https://github.com/Potatojelly/Ywitter/assets/108857524/43d692c4-2d84-44b4-a758-e93844d6611a)

## Usage <a name="usage"></a>

* User Authentication: Users can sign up, sign in, and log in. Once a user logs in, they are automatically logged in until the JWT token expires. 

* Browse real-time tweets: Users can read all the tweets other users post in real-time

## Technology stack <a name="tech-stack"></a>
The Ywitter project is built using the following technologies:

* Frontend: React, JS, post CSS
  Additional Libraries: React Router

* Backend: NodeJS, Express, MySQL
  Service: User Authentication and real-time tweets

## Reflection <a name="reflection"></a>

### Context for the Project

This project is designed to deepen my knowledge in Back-End development, focusing on aspects such as API Design, robust user authentication, and Socket.io implementation.

### Objective

API Design: The aim is to create a well-structured and efficient API that can handle various data requests and responses, ensuring scalability and maintainability.

User Authentication Implementation: The objective is to implement a secure user authentication system using encryption, JWT (JSON Web Tokens) technology, and input validation, to protect user data and access.

Web Socket: To utilize Socket.io for real-time communication features, enhancing the interactive aspects of the application.

### Challenges and Learning Experiences

Throughout the development of Ywitter, I encountered several challenges that provided valuable learning experiences. 

1. Understanding and Implementing Advanced Security Features
   
  Learning to implement robust user authentication was a significant challenge. This involved understanding and applying encryption techniques, integrating JWT for secure token-based authentication, and ensuring thorough input validation to prevent security vulnerabilities.

2. Leveraging Express Framework for Enhanced Functionality

  Another learning experience was using the Express framework to support CRUD (Create, Read, Update, Delete) operations for tweets. This included grasping how Express can simplify the development process and provide essential middleware support for routing, handling requests, and integrating with other technologies like Socket.io.

