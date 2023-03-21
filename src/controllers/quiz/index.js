const { getQuiz, submitQuiz } = require("../../services/quiz");
const { graphQLHandler } = require("../graphql-handler");
const { expressHandler } = require("../express-handler");
const { validateResponseQuiz } = require("../../schema/quiz");

const ejs = require("ejs");
const fs = require("fs");

const getQuizHandler = async (root, args, context) => {
  return await getQuiz();
};
const getQuizExpressHandler = async (req, res) => {
  return await getQuiz();
};

const submitQuizExpressHandler = async (req, res) => {
  const contentFile = fs.readFileSync("./mail.ejs").toString();
  req.body.answer.map((value, index) => {
    let text = value.replace(new RegExp("\r?\n", "g"), "<br />");
    text = text.replace(new RegExp("  ", "g"), "&nbsp;");
    req.body.answer[index] = text;
    return value;
  });
  req.body.script.map((value, index) => {
    let text = value.replace(new RegExp("\r?\n", "g"), "<br />");
    text = text.replace(new RegExp("  ", "g"), "&nbsp;");
    req.body.script[index] = text;
    return value;
  });
  const content = ejs.render(contentFile, {
    body: req.body,
  });
  return await submitQuiz(content, req.body.candidateID);
};

const resolver = {
  Query: {
    getQuiz: graphQLHandler({
      handler: getQuizHandler,
      validator: validateResponseQuiz,
    }),
  },
};

const express = {
  getQuizExpress: expressHandler({
    handler: getQuizExpressHandler,
    validator: (data) => data,
  }),
  submitQuizExpress: expressHandler({
    handler: submitQuizExpressHandler,
    validator: (data) => data,
  }),
};

module.exports = {
  resolver,
  express,
};
