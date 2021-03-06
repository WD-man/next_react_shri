const http = require(`http`);
const debug = require(`debug`)('server: ');

const createApp = require(`./app/app`);

(async () => {
  const app = await createApp();

  const server = http.createServer(app);

  const PORT = process.env.PORT || 8077;
  console.log('-------------------------');
  console.log('Port', PORT);
  console.log('-------------------------');

  server.listen(PORT, () => {
    debug(`server is running on port: ${PORT}`);
  });
})();
