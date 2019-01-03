const express = require('express');
const request = require('request-promise');
const fetch = require('node-fetch');
const $ = require('jquery');
const router = express.Router();

/* GET test */
router.get('/', (req, res, next) => {
  // res.send('Response from API GET request!ES6');
  // $.ajax({
  //   type: 'GET',
  //   url: 'http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/testQA',
  //   success: data => res.send(data),
  //   error: (err) => console.log('error!!!!', err)
  // });
  const response = await fetch('http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/testQA');
  const data = await response.json();
  res.send(data);
  // fetch('')
  // .then(data => {
  //   res.send(data);
  // });
});

module.exports = router;
