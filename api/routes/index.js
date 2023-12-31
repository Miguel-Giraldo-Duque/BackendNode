const express = require('express');

const productsRouter = require('./products.router');
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
}

module.exports = routerApi;



// const productsRouter = require('./products.router');
// // const usersRouter = require('./users.router');

// function routerApi(app) {
//  app.use('/products', productsRouter);
// //  app.use('/users', productsRouter);
// //  app.use('/categories', productsRouter);
// }

// module.exports = routerApi;
