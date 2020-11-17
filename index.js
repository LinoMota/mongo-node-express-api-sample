import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import db from './db/db.js';

import customerRoutes from './routes/customer.js';

// Adicionar Variavel de ambiente
const PORT = process.env.PORT || 3333
const app = express();

db.then(() => {

    app.use(bodyParser.json());
    app.use(cors());

    app.use('/customers', customerRoutes);

    app.listen(PORT)

})