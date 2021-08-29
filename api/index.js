import express from 'express'
import Prisma from '@prisma/client'
import morgan from 'morgan'
import path from './src/routes/routes.js'

const prisma = new Prisma.PrismaClient()
const server = express()
const port = 3001

/* server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser()); */
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', path);

server.get("/", (req, res) => {
  return res.send("home")
})


/* const server =  */server.listen(port, () => {
    console.log('listening at ' + port); // eslint-disable-line no-console
  });