const express = require('express'); 
const path = require('path'); 
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer(); 
// Serve static files.... 
app.use(express.static(__dirname + '/dist/weather-app')); 
// Send all requests to index.html 
app.get('/forecast*', function(req, res) {
  apiProxy.web(req, res, {target: 'http://api.openweathermap.org/data/2.5'});
});
app.get('/*', function(req, res) { res.sendFile(path.join(__dirname + '/dist/weather-app/index.html')); }); // default Heroku PORT 
app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });