const express = require('express');
const app = express();


const dotenv = require('dotenv');
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({ path: envFile });
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello Worlddddddddddd!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
