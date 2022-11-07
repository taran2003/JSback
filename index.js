const express = require('express')
const app = express()
const router = require("./routes/router")
const bodyParser = require("body-parser")
const port = 3000

app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
