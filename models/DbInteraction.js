var database = require('../database/database');


var secondDashFinder = function (string) {
  while (string.match(/-/g).length > 1) {
    string = string.slice(0, string.lastIndexOf('-'))
  }
  return string;
}

var TurnIn = function (q) {
  this.date = (new Date()).toISOString().slice(0, 11);
  this.owner = q.owner;
  this.url = q.url;
  //example format https://github.com/nss-daycohort11/js102-quiz-albennett

  this.quizname = q.url.slice(q.url.lastIndexOf('/') + 1, q.url.indexOf('-quiz'));
}


TurnIn.save = function (assignmentPojo, cb) {
  var assignment = new TurnIn(assignmentPojo);

  var query = "INSERT INTO links VALUES ('" + assignment.url + "', '" + assignment.owner + "', '" + assignment.quizname + "', '" + assignment.date + "', null)";
  database.query( query, cb);
}

TurnIn.grabAll = function (req, cb) {
  console.log('made it to the model at least');

  var query = "SELECT * FROM links INNER JOIN students ON links.owner = students.slack_name WHERE students.ta = '" + req.body.username + "'";
  database.query(query, cb);
}

module.exports = TurnIn;
