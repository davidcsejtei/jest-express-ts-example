const app = require('express')();
const http = require('http').Server(app).listen(3002);

import getAllPosts from './routes/getAllPosts';
import getAllUsers from './routes/getAllUsers';

app.get('/users/all', getAllUsers);
app.get('/posts/all', getAllPosts);
