const express = require('express');
const https = require('https');
// const request = require('request-promise');
// const fetch = require('node-fetch');
const $ = require('jquery');
const router = express.Router();

/* GET test */
router.get('/', (req, res, next) => {
  console.log('inside get request')
  // res.send('Response from API GET request!ES6');
  res.redirect('http://localhost:3004/testQA');
  // $.ajax({
  //   type: 'GET',
  //   url: 'http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/testQA',
  //   success: data => console.log('data', data),
  //   error: (err) => console.log('Error in proxy server: ', err)
  // });
  // https.get('http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/testQA', (resp) => {
  //   let data = '';

  //   // A chunk of data has been recieved.
  //   resp.on('data', (chunk) => {
  //     data += chunk;
  //   });

  //   // The whole response has been received. Print out the result.
  //   resp.on('end', () => {
  //     // console.log(JSON.parse(data).explanation);
  //     res.send(data);
  //   });

  // }).on("error", (err) => {
  //   console.log("Error: " + err.message);
  // });
  // const response = await fetch('http://localhost:3000/hotels/4/questions');
  //   questions = await response.json();
  // fetch('http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/testQA')
  // .then(data => {
  //   res.send(data);
  // });
  // request.get('http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/testQA')
  //     .on('response', (data) => {
  //       res.send(data);
  //     });
});

module.exports = router;
