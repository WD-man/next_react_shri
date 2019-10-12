const express = require('express');
const next = require('next');
const errorDebug = require('debug')('error: ');
const axios = require('axios');

const { getRepos, getRepoStaff, getFileStaff } = require('./server_helpers');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

module.exports = async () => {
  await nextApp.prepare();
  const expressApp = express();

  expressApp.get('/api/repos/create', async (req, res) => {
    try {
      await axios.post('http://localhost:8076/api/repos/js', {
        url: 'https://github.com/WD-man/js_task.git',
      });
      res.set('location', 'http://localhost:8077/');
      res.status(301);
      return nextApp.render(req, res, '/index');
    } catch (err) {
      console.log('-------------------------');
      console.log('err', err);
      console.log('-------------------------');
      res.status(500).end();
    }
  });

  expressApp.get('/api/repos/delete', async (req, res) => {
    try {
      await axios.delete('http://localhost:8076/api/repos/js');
      res.set('location', 'http://localhost:8077/');
      res.status(301);
      return nextApp.render(req, res, '/index');
    } catch (err) {
      console.log('-------------------------');
      console.log('e', err);
      console.log('-------------------------');
      res.status(500).end();
    }
  });

  expressApp.get('/api/repos', getRepos);

  expressApp.get('/api/repos/:id/:path?', getRepoStaff);

  expressApp.get('/api/files/:id/:path', getFileStaff);

  expressApp.get('/', (req, res) => {
    return nextApp.render(req, res, '/index');
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
