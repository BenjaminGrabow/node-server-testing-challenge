const express = require('express');
const server = express();
// const authRouter = './auth/authRouter';
// const userRouter = './user/userRouter';

server.use(express.json());
// server.use('/auth', authRouter);
// server.use('/user', userRouter);

module.exports = server;