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
    debug('repos start');
    const {
      data: { msg },
    } = await axios.get('http://localhost:8076/api/repos');
    res.json(msg);
  });

  expressApp.get('/api/repos/:id/:path?', async (req, res) => {
    const { id, path } = req.params;
    const innerRep = path && path.split('$').join('/');
    try {
      const {
        data: { msg },
      } = await axios.get(`http://localhost:8076/api/repos/${id}/tree/master/${innerRep || ''}`);
      res.json(msg);
    } catch (err) {
      res.status(500).end('error');
    }
  });

  expressApp.get('/api/files/:id/:path', async (req, res) => {
    const { id, path } = req.params;
    const innerRep = path && path.split('$').join('/');
    try {
      const {
        data: { msg },
      } = await axios.get(`http://localhost:8076/api/repos/${id}/blob/master/${innerRep || ''}`);
      res.json(msg);
    } catch (err) {
      res.status(500).end('error');
    }
  });

  expressApp.get('*', (req, res) => {
    return handle(req, res);
  });

  expressApp.use((err, req, res) => {
    errorDebug(err.stack);
    res.status(500).send('Something broke!');
  });

  return expressApp;
};
