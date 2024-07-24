import http from 'http';
import { app } from './app.js';
import { MongoConnection } from './utility/database.utility.js';

// PORT
const port = 8000;

const httpServer = http.createServer(app);

await MongoConnection()

httpServer.listen(port, () => {
    console.log("Server Started on port", port);
});
