// var builder = require('botbuilder');

// var connector = new builder.ConsoleConnector().listen();
// var bot = new builder.UniversalBot(connector, function (session) {
//     session.send("You said: %s", session.message.text);
// });

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 5000

app.use(bodyParser())

app.post('/errors', (req, res) => {
  console.log(req.body)
  res.send()
})

app.listen(port, () => {
  console.log('Server is running on port 5000')
})