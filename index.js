// var builder = require('botbuilder');

// var connector = new builder.ConsoleConnector().listen();
// var bot = new builder.UniversalBot(connector, function (session) {
//     session.send("You said: %s", session.message.text);
// });

var express = require('express')
var bodyParser = require('body-parser')
var recastai = require('recastai').default


var connect = new recastai.connect('YOUR_REQUEST_TOKEN')

var app = express()

/* Server setup */
app.set('port', 5000)
app.use(bodyParser.json())
app.post('/', function(req, res) {
  connect.handleMessage(req, res, onMessage)
})

function onMessage (message) {
  // Get the content of the message
  var content = message.content

  // Get the type of the message (text, picture,...)
  var type = message.type

  // Add a reply, and send it
  message.addReply([{ type: 'text', content: 'Hello, world' }])
  message.reply()
}