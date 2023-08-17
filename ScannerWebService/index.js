let express = require('express')
let app = express();

let router = express.Router()

app.use('/api/',router);

var server = app.listen(8090,function(){
 console.log('Web Sever is running on port:8090.');
});

// HTTPSサーバー起動 
/*Country Name (2 letter code) []:JP
State or Province Name (full name) []:Japan
Locality Name (eg, city) []:Osaka
Organization Name (eg, company) []:NK
Organizational Unit Name (eg, section) []:NK
Common Name (eg, fully qualified host name) []:. 
Email Address []:.
Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:12345 */                                                                              
// var fs = require('fs');
// var https = require('https');

// var options = {
//   key:  fs.readFileSync('./keyfile/encript.key'),
//   cert: fs.readFileSync('./keyfile/encript.csr')
// };

// var server = https.createServer(options,app);

// // イベント待機                                                                                    
// server.listen(8090);

// ルート設定                                                                                      
router.get('/hello', function (req, res) {
    res.writeHead(200);
    res.end("Hello World.");
});
