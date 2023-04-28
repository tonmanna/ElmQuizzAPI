const quiz = require("../../data/quiz");
const quizTester = require("../../data/quiz/tester");
const mail = require("../mail");
const getQuiz = async () => {
  const result = await quiz.getQuiz();
  return result;
};

const getQuizTester = async () => {
  const result = await quizTester.getQuiz();
  return result;
};

const submitQuiz = async (messageHtml, candidateName) => {
  return new Promise((resolve) => {
    var mailOptions = {
      from: "exam@theiconweb.com", // sender address
      to: "marisa@theiconweb.com", // list of receivers
      subject: "Exam from :" + candidateName, // Subject line
      html: messageHtml, // html body
      bcc: "worawut@theiconweb.com",
    };
    mail.transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        resolve({ status: 500, message: error });
      } else {
        console.log("Message sent: " + info.response);
        resolve({ status: 200, message: info.response });
      }
    });
  });
};

module.exports = {
  getQuiz,
  submitQuiz,
  getQuizTester,
};
