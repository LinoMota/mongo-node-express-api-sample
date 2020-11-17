import express from 'express';
import customerController from '../controllers/customer.js'

const routes = express.Router();

routes.get('/', customerController.findAll);
routes.get('/filtrado', customerController.findUsingFilter);

routes.post('/', customerController.insert);

routes.put('/',customerController.update);

routes.delete('/',customerController.deleteOne);

export default routes;