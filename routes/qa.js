const express = require('express');
const router = express.Router();

/* GET questions */
router.get('/', (req, res, next) => {
  console.log('inside get request of qa route [proxy server]');
  res.redirect('http://localhost:3004/questions');
});

router.get('/hotels/:hotelId/questions', (req, res, next) => {
  console.log('inside get request of qa route for questions [proxy server]');
  const { hotelId } = req.params;
  res.redirect(`http://localhost:3004/hotels/${hotelId}/questions`);
});

module.exports = router;
