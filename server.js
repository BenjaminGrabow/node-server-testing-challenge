const express = require('express');
const server = express();
const authRouter = require('./auth/auth-router');
// const userRouter = './user/users-router';

server.use(express.json());
server.use('/', authRouter);
// server.use('/user', userRouter);

module.exports = server;