var express = require('express');
var app = express();

function myPublicPath() {
  //__dirname = "current location"
  return __dirname + "\\ public"; //assuming a public folder at the root
}

console.log('starting');
var dir2use = myPublicPath();
console.log(dir2use);

app.use(express.static(dir2use));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
