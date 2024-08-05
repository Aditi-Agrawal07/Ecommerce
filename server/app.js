import express from 'express';
import cors from 'cors'
import { productRoute } from './routers/products.routes.js';

const app = express();

app.use(express.json())
app.use(cors())
app.use("/product", productRoute);


export { app };
