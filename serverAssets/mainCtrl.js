var firebase = require('firebase');
var numbers = new firebase('https://fs-text-support.firebaseio.com/numbers');

var accountSid = 'ACd99b4708fc46c579a183a606b72f1a7d';
var authToken = "db9011a94252b41521ea4808e81e47fa";

var client = require('twilio')(accountSid, authToken);

module.exports = {

  sendMessage: function (req, res) {
    console.log(req.body);


    client.messages.create({
      body: req.body.body,
      to: req.body.to,
      from: "+12029308984"
    }, function (err, message) {
      console.log('HOLY COW', err);
      console.log(message);
      var ref = new firebase('https://fs-text-support.firebaseio.com/numbers/' + message.to);
      ref.push({
        Body: message.body,
        From: message.from
      });
      return res.json(message);
    });

  }

};