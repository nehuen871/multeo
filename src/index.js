const express = require('express');
const path = require('path');
const layout = require('express-layout');
const bodyParser = require('body-parser');
const app = express();

// Settings

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);

// Middlewares
const middlewares = [
  layout(),
  bodyParser.urlencoded(),
  express.static(path.join(__dirname, 'public'))
];
app.use(middlewares)
app.use(express.json());

// Routes
app.use(require('./routes/transito'));
app.use(require('./routes/comercio'));
app.use(require('./routes/formComercio'));
app.use(require('./routes/formTransito'));
app.use(require('./routes/multas'));


app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});