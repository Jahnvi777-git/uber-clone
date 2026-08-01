const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env') });
console.log('DB:', process.env.DB_CONNECT);
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes');
const mapsRoute = require('./routes/maps.routes')

connectToDb();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)
app.use('/maps', mapsRoute)

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


module.exports = app;