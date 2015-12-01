var firebase = require('firebase');
var numbers = new firebase('https://fs-text-support.firebaseio.com/numbers');

var accountSid = 'ACd99b4708fc46c579a183a606b72f1a7d';
var authToken = "db9011a94252b41521ea4808e81e47fa";

var client = require('twilio')(accountSid, authToken);

module.exports = {

  sendMessage: function (req, res) {
    console.log(req.body);
    res.send('hey');
    /*
        
        client.messages.create({
          body: "Jenny please?! I love you <3",
          to: "+14159352345",
          from: "+14158141829"
        }, function (err, message) {
          process.stdout.write(message.sid);
        });
    */

  }

};