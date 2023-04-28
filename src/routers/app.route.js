const { express } = require("../controllers/quiz");
module.exports = (router) => {
  router.get("/getQuizTester", express.getQuizTesterExpress);
  router.get("/getQuiz", express.getQuizExpress);
  router.post("/submitAnswer", express.submitQuizExpress);
};
