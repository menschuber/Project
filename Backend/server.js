import express from 'express';

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.status(500).send({
    message: err.message
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('http://localhost:${port}'));