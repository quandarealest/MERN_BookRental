const { Router } = require('express');
const BooksRoutes = require('./books/books.routes');
const RentalsRoutes = require('./rentals/rentals.routes');
const UsersRoutes = require('./users/users.routes');

const rootRoute = new Router();
const booksRoutes = new BooksRoutes();
const rentalsRoutes = new RentalsRoutes();
const usersRoutes = new UsersRoutes();

rootRoute.use('/books', booksRoutes.router);
rootRoute.use('/rentals', rentalsRoutes.router);
rootRoute.use('/users', usersRoutes.router);

module.exports = rootRoute;