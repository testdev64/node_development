import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();


server.get('/',(req , res) => {
  res.render('index',{
    content : '...'
  });
});

server.use(express.static('public'));
server.use('/api',apiRouter);

server.set('view engine','ejs');




server.listen(config.port,()=>{
  console.info('Express is listening on port',config.port);
});
