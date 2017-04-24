# react-challenge-tesla

[![Build Status](https://travis-ci.com/roshancvp/react-challenge-tesla.svg?token=DzBp2wNpQSAVzWZNdfwR&branch=master)](https://travis-ci.com/roshancvp/react-challenge-tesla)

Installation
------------
Create a virtual environment using [virtualenv](https://virtualenv.pypa.io/en/stable/) and install required python packages. Start Flask-RESTful server.
```
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
python server.py
```

Install node packages and start webpack-dev-server
```
npm install
npm start
```

Navigate to `http://localhost:8080`

Architecture
------------

### Additional Libraries
* **redux:** I built this application aiming to build a scalable user interface. My familiarity with redux's straight-forward API and ability to easily extend it for more complex applications made redux a better choice for me over other frameworks.
* **redux-form:** Used it for it's form validation and dynamic field features.
* **redux-promise:** Used it as middleware to resolve promises between data flow from actions to reducers.
* **react-router:** Again, I wanted to make adding more components and services easier to the application. I started using react-router with the intent of navigating the user to a seperate page with a full screen view of the post's image when it is clicked. Due to time constraints, I haven't implemented it yet. 

![alt text](http://i.imgur.com/Bap7UUd.png "Application Architecture Diagram")

Design
------------

The UI/UX and design was the first problem I tried to solve before writing any code. 

I built a mockup using Sketch to understand how the user would interact with the application and how to structure the components. The sketch file can be found [here](https://github.com/roshancvp/react-challenge-tesla/tree/master/design) or be previewed [here](https://sketch.cloud/s/VP98).

