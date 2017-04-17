# react-challenge

Overview
===============

This is a React take-home challenge.  We are looking for a React web application built on top of this simple python server.  We are using Flask to generate a basic server that has a few REST endpoints, and a React Webpack server to display the homepage.  This is a React web application of various, anonymous posts with images.

Basic Requirements
---------------

1. You will create a form for the user to create a post with image urls. The post form will contain a title, description, and multiple image url fields (optional).

2. Once the user creates a post, you should update the main page with the latest post, sorting from newest to oldest.

3. Your home page should show all posts and associated images from the backend server for the user to view.  This should show the title, description, and images for all posts.


What we are looking for
---------------

From here, you have the freedom to choose how to implement the rest of the page, but you must use React.  For consideration for an intern role, we are looking for a few things -- how you structure your JavaScript code, what libraries you choose to use, and how you decide to display information to the end user.  To join our team in a UI / UX capacity, it is very important to keep both the user in mind, code maintainability, and structure.

You may use any additional JavaScript and CSS libraries you wish, and you may modify the server code however you like as well.


Getting Setup
===============

To get started with what your API service, you will simply need to be in the root directory of this package and run:

    pip install -r requirements.txt
    python server.py

That should install the requried API libraries for this project, and then start your API service.

To get started with the React development server, start a new Terminal window, and then run:

    npm install
    npm start

This should install the required React libraries for this project, and then start your development server.

If you run into trouble please reference the documentation for:

* pip: https://docs.python.org/3.6/installing/index.html
* flask: http://flask.pocoo.org/
* npm https://docs.npmjs.com/

Usage
==============

We have provided a few basic API routes to work with.

    GET/POST            /posts
    GET/PUT/DELETE      /posts/:id

    GET/POST            /images
    GET/PUT/DELETE      /images/:id


The /posts route will return a list of all available posts and their content.  The `Post` object will contain
the following fields:

    {
        id: <int>,
        title: <string>,
        images: [ <Image Object>, ... ]
    }

And the `Image` object will contain:

    {
        id: <int>,
        url: <string>,
        post_id: <int>
    }

You may add any more routes you wish, for this test we are using `flask-restful` as the middleware to generate the routes. Verify that the API returns information:

    http://127.0.0.1:5000/posts

Once you have everything up and running, point your browser to the React server:

    http://127.0.0.1:8081/
