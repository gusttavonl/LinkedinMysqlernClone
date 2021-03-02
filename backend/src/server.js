const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser'); // cookies no servidor
const cors = require('cors'); // importando o cors

require('./database');

const app = express();

app.use(cors()); // usando o app(express) com o cors(segurança dos dominios)
app.use(cookieParser()); // usando o app(express) com o cookieParser
app.use(express.json()); // para receber e usar json do back para o front
app.use(routes);



app.listen(3333);
