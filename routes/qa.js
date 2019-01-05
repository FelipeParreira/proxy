const express = require('express');
const axios = require('axios');
const router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  next();
});

/* GET questions */
router.get('/', (req, res, next) => {
  console.log('inside get request of qa route [proxy server]');
  res.send('hello');
  // res.redirect('http://localhost:3004/questions');
});

router.get('/hotels/:hotelId/questions', (req, res, next) => {
  // console.log('inside get request of qa route for questions [proxy server]');
  const { hotelId } = req.params;
  // res.send(['aba']);
  axios.get(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions`)
  .then(data => {
    res.send(data);
  });
  // res.redirect(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions`);
});

module.exports = router;
