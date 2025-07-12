const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConnect');

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();
connectDB();


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});