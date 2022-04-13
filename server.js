const app = require('express')();
const bodyParser = require('body-parser');
const paintCalculatorController = require('./src/controllers/paintCalculatorController');

const PORT = 3000;

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', paintCalculatorController.renderPaintCalculator);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
