const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.send('Portfolio Backend is running');
});

const projectRoutes = require('./routes/projectRoutes')

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
