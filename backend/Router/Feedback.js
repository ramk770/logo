const express = require("express");
const router = express.Router();
const Feedback = require("../controller/Feedbackcontroller");



router.route('/feedback')
  .get(Feedback.getallFeedback)
  .post(Feedback.createFeedback);

router.route('/feedback/:id')
  .delete(Feedback.deletefeedback)
  .get(Feedback.getOnefeedback);

module.exports = router;







