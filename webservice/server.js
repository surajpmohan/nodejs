const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger('dev'));
app.get('/api/:name', function(req, res){
	res.json(200, {"Hello ": req.params.name});
	});
app.listen(3000,function(){
	console.log("The service is up.");
});
