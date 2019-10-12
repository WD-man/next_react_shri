import express, { Request, Response, Errback } from 'express';
import next from 'next';
import debugInit from 'debug';
import { getRepos, getRepoStaff, getFileStaff } from './server_helpers';

const errorDebug = debugInit('error: ');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

export default async () => {
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

  expressApp.use((err: Errback, req: Request, res: Response) => {
    errorDebug(err);
    res.status(500).send('Something broke!');
  });

  return expressApp;
};
