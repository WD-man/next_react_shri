const express = require('express');
const next = require('next');
const debug = require('debug')('app: ');
const axios = require('axios');
const errorDebug = require('debug')('error: ');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

module.exports = async () => {
  await nextApp.prepare();
  const expressApp = express();

  expressApp.get('/api/repos', async (req, res) => {
    const {
      data: { msg },
    } = await axios.get('http://localhost:8076/api/repos');
    res.json(msg);
  });

  expressApp.get('/api/repos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const {
        data: { msg },
      } = await axios.get(`http://localhost:8076/api/repos/${id}/tree/`);
      res.json(msg);
    } catch (err) {
      res.status(500).end('error');
    }
  });

  expressApp.get('*', (req, res) => {
    return handle(req, res);
  });

  expressApp.use(function(err, req, res) {
    errorDebug(err.stack);
    res.status(500).send('Something broke!');
  });

  return expressApp;
};
