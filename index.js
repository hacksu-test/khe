   
const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => console.log(`listening on http://localhost:${port}`));

let n = 0;
app.get('/', (req, res) => res.send(`heeeey it works! visited ${++n} times!`));
