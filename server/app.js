import express from 'express';
import { productRoute } from './routers/products.routes.js';

const app = express();

app.use(express.json())
app.use("/product", productRoute);


export { app };
