var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/public')).listen(8080, function(){
    console.log('Successful, Server running on 8080...');
});

//bot passcode tdnqA3@xmrJVXNJV7967(^_
// MICROSOFT_APP_ID="5ed625c6-9062-4ed9-b616-b52c5df77fc2"