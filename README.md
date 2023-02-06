# RESTful-APIs-using-Express
 
 This is a simple Express.js web application that demonstrates CRUD (Create, Read, Update, Delete) operations with the validation of user inputs using Joi.
 
 
## Requirements
<ul>
 <li>Node.js</li>
 <li>Express.js</li>
 <li>Joi</li>
</ul>


## Getting started


### 1. Clone the repository
```
$ git clone https://github.com/chandramohan0/RESTful-APIs-using-Express.git
```

### 2. Install dependencies
```
$ npm install

```
### 3. Start the application
```
$ npm start
```

### 4. The application will be available at `http://localhost:3000`


## API Endpoints

### The following API endpoints are available:

 * `GET /api/genres`: Retrieve the list of all genres
 * `POST /api/genres`: Add a new genre to the list
 * `PUT /api/genres/:id`: Update an existing genre by its id
 * `DELETE /api/genres/:id`: Delete an existing genre by its id
 * `GET /api/genres/:id`: Retrieve a specific genre by its id
 

## Validating User Inputs

The application uses Joi to validate the user inputs. A genre name must have at least 3 characters.


## API Testing

To test the API endpoints, we are using [Postman](https://www.postman.com/).


## Conclusion

This application demonstrates how to implement a simple CRUD API with Express.js and validate user inputs with Joi.
 
