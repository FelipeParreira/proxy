const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET questions */
router.get('/', (req, res, next) => {
  console.log('inside get request of qa route [proxy server]');
  res.redirect('http://localhost:3004/questions');
});

router.get('/hotels/:hotelId/questions', (req, res, next) => {
  // console.log('inside get request of qa route for questions [proxy server]');
  const { hotelId } = req.params;
  res.redirect(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions`);
});

module.exports = router;
