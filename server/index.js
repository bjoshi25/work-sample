const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();
const port = 5000;
require('dotenv').config();

const APIbaseURL = process.env.REACT_APP_BaseURL;
const APIkey = process.env.REACT_APP_MarvelPublicKey;
const APIhash = process.env.REACT_APP_MarvelHash;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

app.get('/:character', (req, res) => {

  let character = req.params.character;
  const APIrequestURL = APIbaseURL + `title=${character}` + `&ts=1` + `&apikey=${APIkey}` + `&hash=${APIhash}`

  axios.get(APIrequestURL)
    .then((response) => {
      // console.log('response from API',response.data.data.results );
      res.status(200).send(response.data.data.results);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});