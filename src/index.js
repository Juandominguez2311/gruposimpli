const express = require('express');
const cors = require('cors');
const app = express();
const apiRoutes = require('./api/routes');
const DatabaseService = require('./services/DatabaseService');
const bodyParser = require('body-parser').json();
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const RedisService  = require('./services/RedisService')

const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
    optionsSuccessStatus: 200,
    exposedHeaders: ['Set-Cookie']
};


(async () => {
  app.use(cors(corsOptions));
  app.use(cookieParser());
  app.use(bodyParser);
  app.use(checkUser);

  app.get("/ping", (req, res) => res.send("pong"));
  app.use("/api", apiRoutes);

  const serverReadyLog = () =>
    console.log(`🚀 Server ready at http://localhost:3000/panel`);
  await DatabaseService.connect();
  await RedisService.connect();
  app.listen(3000, serverReadyLog);
})();
