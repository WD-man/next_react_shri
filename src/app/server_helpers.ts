import { Request, Response } from 'express';
import axios from 'axios';
import debugInit from 'debug';
const debug = debugInit('app: ');

const getRepos = async (req: Request, res: Response) => {
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

const getRepoStaff = async (req: Request, res: Response) => {
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

const getFileStaff = async (req: Request, res: Response) => {
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

export { getRepos, getRepoStaff, getFileStaff };
