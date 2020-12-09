"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('express')();
const http = require('http').Server(app).listen(3002);
const getAllPosts_1 = __importDefault(require("./routes/getAllPosts"));
const getAllUsers_1 = __importDefault(require("./routes/getAllUsers"));
app.get('/users/all', getAllUsers_1.default);
app.get('/posts/all', getAllPosts_1.default);
//# sourceMappingURL=index.js.map