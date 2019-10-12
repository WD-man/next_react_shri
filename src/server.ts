import debugInit from 'debug';
import createApp from './app/app';
import { createServer } from 'http';

const debug = debugInit('server: ');

(async () => {
  const app = await createApp();

  const server = createServer(app);

  const PORT = process.env.PORT || 8077;

  server.listen(PORT, () => {
    debug(`server is running on port: ${PORT}`);
  });
})();
