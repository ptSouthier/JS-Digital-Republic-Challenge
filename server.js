const app = require('express')();

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (_req, res) => {
  res.render('paintCalculator', { walls_qty: 4 });
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
