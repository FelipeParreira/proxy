const express = require('express');
const axios = require('axios');
const util = require('util');
// const proxy = require('http-proxy-middleware');
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

// GET questions for a certain hotel
router.get('/hotels/:hotelId/questions', (req, res, next) => {
  const { hotelId } = req.params;
  axios.get(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions`)
  .then(response => {
    res.send(response.data);
  });
});


// POST a question to a hotel
router.post('/hotels/:hotelId/questions', (req, res) => {
  const { hotelId } = req.params;
  const { postedDate, content, userId } = req.body;
  axios.post(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions`, {
    postedDate, content, userId
  })
  .then(response => {
    res.send(response.data);
  });
});

// DELETE a question for a hotel
router.delete('/hotels/:hotelId/questions/:questionId', (req, res) => {
  const { questionId, hotelId } = req.params;
  // res.send([questionId, hotelId]);
  const { userId } = req.body;
  // res.send([userId]);
  // res.send(['dfgh']);
  axios.delete(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions/${questionId}/${userId}`)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.send(error);
  });
});

// === FROM HERE ====
// POST a report for a certain question
router.post('/hotels/:hotelId/questions/:questionId/reports', (req, res) => {
  const { questionId, hotelId } = req.params;
  axios.post(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions/${questionId}/reports`)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.send(error);
  });
});

// POST an answer for a certain question
router.post('/hotels/:hotelId/questions/:questionId/answers', (req, res) => {
  const { questionId, hotelId } = req.params;
  const { content, userId } = req.body;
  axios.post(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions/${questionId}/answers`, 
  { content, userId })
  .then(response => {
    res.send(response.data);
  });
});

// DELETE an answer for a certain question
router.delete('/hotels/:hotelId/questions/:questionId/answers/:answerId', (req, res) => {
  const { answerId, hotelId, questionId } = req.params;
  const { userId } = req.body;
  axios.delete(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions/${questionId}/answers/${answerId}/${userId}`)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.send(error);
  });
});

// Upvote or downvote a certain answer to a particular question
router.patch('/hotels/:hotelId/questions/:questionId/answers/:answerId/votes', (req, res) => {
  // vote should be 1 or -1
  const { vote } = req.body;
  const { answerId, hotelId, questionId } = req.params;
  axios.patch(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions/${questionId}/answers/${answerId}/votes`, {
    vote
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.send(error);
  });
});

// // POST a report for a certain answer
// router.post('/hotels/:hotelId/questions/:questionId/answers/:answerId/reports', (req, res) => {
//   // the following function is just a stub
//   // since our Q&A module is not able to retrieve reports,
//   // we are not saving anything; you can implement this in the future if you want.
//   postReportForAnswer(res);
// });

// // POST a message for a certain user
// router.post('/users/:userId/messages', (req, res) => {
//   // the following function is just a stub
//   // since our Q&A module is not able to retrieve messages,
//   // we are not saving anything; you can implement this in the future if you want.
//   postMessageToUser(res);
// });

module.exports = router;
