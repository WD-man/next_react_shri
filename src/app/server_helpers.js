const axios = require('axios');
const debug = require('debug')('app: ');

const getRepos = async (req, res) => {
  debug('repos start');
  try {
    const {
      data: { msg },
    } = await axios.get('http://localhost:8076/api/repos');
    res.json(msg);
  } catch (err) {
    res.status(500).end();
  }
};

const getRepoStaff = async (req, res) => {
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
};

const getFileStaff = async (req, res) => {
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
};

module.exports = {
  getRepos,
  getRepoStaff,
  getFileStaff,
};
