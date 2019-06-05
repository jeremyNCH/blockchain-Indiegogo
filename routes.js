const routes = require('next-routes')();

// order of routes is important
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index');

module.exports = routes;
