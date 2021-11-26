const http = require("http");
const app = require("./app");
const PORT = process.env.APPID || 8000;
const { loadTopMovies } = require("./models/movies.model");
const server = http.createServer(app);

const startServer = async () => {
  await loadTopMovies();
  server.listen(PORT, () => {
    console.log(`Server run on port ${PORT} `);
  });
};

startServer();
