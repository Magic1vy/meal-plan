const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');


require("dotenv").config();

const PORT = 8000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_LINK)
    .then ( () => console.log ("Connected to MongoDB"))
    .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Running PORT ${PORT}`)
})


