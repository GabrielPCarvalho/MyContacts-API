const express = require('express');
require('express-async-errors');
const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

// PARA FAZER O BODY PARSER FUNCIONAR
app.use(express.json());
// CORS
app.use(cors);
// ROTAS
app.use(routes);
// SE NÃO ENCONTRAR ROTA
app.use(errorHandler);

app.listen(3001, () => console.log('🧨 Server started at http://localhost:3001'));
