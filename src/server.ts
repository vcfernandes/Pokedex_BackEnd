import "dotenv";

import express from 'express';


import {connectToDatabase} from "./database"
import routes from "./routes";

import cors from 'cors'
import morgan from 'morgan'

connectToDatabase();

const app = express();
const port = 3334;

app.use(morgan('dev'));
app.use(cors())

app.use(express.json());
app.use(routes);



app.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`);
});