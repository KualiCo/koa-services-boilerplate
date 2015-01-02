var koa = require('koa');
var Thinky = require('thinky');
var koa = require('koa');
var logger = require('koa-logger');
var router = require('koa-router');
var body = require('koa-body');
var namespace = require('koa-namespace');
var config = require('config');

var app = koa();

app.use(body());
app.use(logger());
app.use(router(app));
namespace(app);

app.get('/', function* home() {
  this.body = {sup: 'yo'};
});

module.exports = function() {
  app.listen(process.env.PORT || config.port || 1437);
}

if (module == require.main) {
  module.exports();
}
