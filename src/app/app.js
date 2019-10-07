const express = require('express');
const next = require('next');
const errorDebug = require('debug')('error: ');

const { getRepos, getRepoStaff, getFileStaff } = require('./server_helpers');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

module.exports = async () => {
  await nextApp.prepare();
  const expressApp = express();

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
