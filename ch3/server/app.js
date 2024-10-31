import express from 'express';
import user from './routes/user.js';
import createDBConection from './db.js';
import cors from 'cors';
// dotenv import using old methond
// require(dotenv).config();
// const dotenv =require("dotenv")
// dotenv.config();
// dotenv import uisng es6
createDBConection();
import 'dotenv/config';
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  // optionsSuccessStatus: 200,
  // // Allow requests from your frontend app
  // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
  // credentials: true, // Allow credentials (cookies, authorization headers)
  // // optionsSuccessStatus: 204, // For legacy browser support
};
app.use(cors(corsOptions));
app.use(express.json());
const port = process.env.PORT;
app.use('/api/user', user);

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(port, () =>
  console.log(`Server is Listening on : http://localhost:${port}`)
);
