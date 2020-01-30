# rocketseat-bootcamp2020-module01
Understanding Node.JS - Basic Concepts

# What is this project about?
This is project is about practicing the basic concepts behind Node.JS that 
were learned during the first module of the GoStack 10 Bootcamp.

## How to run this project?
  `yarn dev`

  - It's possible to test the **GET** methods through the browser, but the other
  methods I recommend using applications such as **Insomnia** or **Postman**.
## Logbook
### Day 01 - 2020/01/27
  * Basic Concepts of a REST API
    * How does it work?
      * Resquest & Response flow:
        1. Request is made by the client (e.g.: browser)
        2. Response is returned - by the server - through a data structure (e.g.: JSON)
        3. Client gets the response and processes the result

  * Routes use HTTP methods
    1. GET: `http://myapi.com/users`
        * Looks for data
    2. POST: `http://myapi.com/users`
        * Creates data
    3. PUT: `http://myapi.com/users/1`
        * Updates a piece data
    4. DELETE: `http://myapi.com/users/3`
        * Deletes a piece of data

  - Benefits
    - Multiple clients (front-end) using the same back-end
    - Standard communication protocol
      - Same structure for web/mobile/public API
      - Communication with external services

  - Request Content
    - **GET**: `http://myapi.com/company/1/users?page=2`
      - routes: `/company` & `/users`
      - route params: `/1/`
      - query params: `?page=2`

    - **POST**: `http://myapi.com/company/1/users?page=2`
      - User data to be created is sent through the body/request body (PUT/POST only)
        - More detailed/sensitive data

    - Headers: Additional information that is not related to the request's content (e.g.: `{ "locale": "pt_BR }`)

### Day 02 - 2020/01/28
  - HTTP Codes: Every response (back-end -> front-end) takes with it a HTTP code, that represents the response's status.
    1. 1xx: INFORMATIONAL
    2. 2xx: SUCCESS
        - 200: success
        - 201: created
    3. 3xx: REDIRECTION
        - 301: moved permanently
        - 302: moved
    4. 4xx: CLIENT ERROR (there is something wrong with the request)
        - 400: bad request
        - 401: unauthorized
        - 404: not found
    5. 5xx: SERVER ERROR
        - 500: internal server error

### Day 03 - 2020/01/29 
  - Creating the application
    - ` yarn init -y `
  - `package.json`
    - It has the important functionality, among many others, of saving the references
    to the project dependencies that were installed.

  - `index.js`
    ```javascript
    const express = require('express'); // exports a function

    // Notice that express is a function that
    // returns an object with many functionalities
    console.log(express);
    ```

  - There are three types of parameters that can be part of a request:
    1. Query params -> `?name=John`
      ```javascript
        const { name } = request.query
      ```
    2. Route params -> `/users/1` -> `/users/:id`
      ```javascript
        const { id } = request.params
      ```
    3. Body/Request body -> `{ "name": "John", "age": 27 }`
      ```javascript
        const { name, age } = request.body
      ```

  - Middlewares (Global and Local)

  - Debugging the application