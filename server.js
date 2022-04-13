const app = require('express')();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (_req, res) => {
  res.render('paintCalculator', { walls_qty: 4 });
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
