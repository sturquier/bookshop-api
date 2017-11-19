Bookshop-api
============

RESTful API using Express.JS & MongoDB
--------------------------------------

I created this project to train myself with REST API concepts & Node.JS


If you need a real API for books, check [Google Books API](https://developers.google.com/books/)

![Diagram](https://image.noelshack.com/fichiers/2017/46/7/1511114738-bookshop-api-diagram.png)

A really nice article to read : https://blog.octo.com/en/design-a-rest-api/

### Requirements 
* [Node.js & npm](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)

### Optional tools
* [Postman](https://www.getpostman.com/)
* nodemon `npm install -g nodemon` 

### Instructions
* Clone this repository
* Install all dependencies `npm install`
* Run MongoDB server : `mongod`
* Run API : `node app.js` ( or `nodemon app.js`)
* The API is now accessible. Have fun with Postman, CURL or any application you want ! :)

| HTTP VERB |       ENDPOINT       |            DESCRIPTION           |
|-----------|----------------------|----------------------------------|
|    GET    | /shop/books 	       | Get all books                    |
|    POST   | /shop/books          | Create a book                    |
|    GET    | /shop/books/:id      | Find a book by id                |
|    GET    | /shop/books/:authors | Find a book by author(s)         |
|    PATCH  | /shop/books/:id      | Update partially a single book   |
|    DELETE | /shop/books/:id      | Delete a single book             |