import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';

const server = express();


server.get('/',(req , res) => {
  res.send('Hello Express');
});

server.use(express.static('public'));
server.use('/api',apiRouter);




server.listen(config.port,()=>{
  console.info('Express is listening on port',config.port);
});
