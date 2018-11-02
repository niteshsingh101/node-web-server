const express = require('express');
const hbs = require('hbs');
const http = require('http');
const fs = require('fs');
var app = express();
const port = process.env.PORT || 3000 ;

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method}: ${req.url}`;
  console.log(log);
  fs.appendFile('log.txt', log +'\n', (err) => {
    if(err){
      console.log(err);
    }
  });
  next();
});
// app.use((req, res, next) => {
//   res.render('maintenance', {title: 'Maintenance page'});
// });
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send("Hello world");
});
app.get('/about', (req, res) => {
  var user =[{
    name: 'Nitesh Singh',
    mobile: 9555157200,
    address: '15025, D Block, 16Th avenue Gaur city 2'
  },
  {
    name: 'Amit Singh',
    mobile: 9555157200,
    address: '15025, D Block, 16Th avenue Gaur city 2'
  }
] ;
  res.render('about',{title: "About page", description: "Welcome to about us page"} );
});

app.listen(port, () => {
  console.log(`Runing on port: ${port}`);
});

module.exports.app = app;
