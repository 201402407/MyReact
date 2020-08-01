const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
// const hostName = '52.79.169.169'

app.use(cors());
app.use(bodyParser.json());
app.use('/test', (req, res) => {
    res.json({carName : '해롱이'});
})

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})

