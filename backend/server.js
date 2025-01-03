import express from 'express';

import cors from 'cors';

import 'dotenv/config';

//================================================ App Config ================================================

const app = express();

const PORT = process.env.PORT || 4000;

//================================================ Middleware ================================================

app.use(express.json());

app.use(cors());

//================================================ API Endpoints ================================================

app.get('/', (req , res) => res.status(200).send('Server is running'));

//================================================ Listener ================================================

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
