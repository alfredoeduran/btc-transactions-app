// app.js
const express = require('express');
const axios = require('axios');
const { Parser } = require('json2csv');
const fs = require('fs');
const path = require('path');
const walletRoute = require('./routes/wallet');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/wallet', walletRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
