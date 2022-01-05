const port=3000;
express=require('express');
app=express();
app.get("/",(req,res)=>{
    res.send("hello");
})
app.use(express.static('public'));
/*var http = require('http');
http.createServer(function (req, res) {  
var receivedText="";

let request = http.get('http://58af0692ea1c.mylabserver.com:30081/api/v1/status/tsdb', (res2) => {
    if (res2.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res2.resume();
        return;
    }


var req = http.get(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));


    var bodyChunks = [];
    res.on('data', function (chunk) {

        bodyChunks.push(chunk);
    }).on('end', function () {
        var body = Buffer.concat(bodyChunks);
        console.log('BODY: ' + body);

    })
});

req.on('error', function (e) {
    console.log('ERROR: ' + e.message);
})

})*/
app.listen(port,()=>{
    console.log("server listening:${port}");
})
