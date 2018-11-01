var express = require('express');
var app = express();

var fs = require('fs');
var crypto = require('crypto');

Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"client","type":"address"},{"name":"amount","type":"uint256"}],"name":"addBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"client","type":"address"}],"name":"queryBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"docHash","type":"bytes32"},{"name":"client","type":"address"}],"name":"checkHash","outputs":[{"name":"isValid","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"docHash","type":"bytes32"},{"name":"client","type":"address"}],"name":"addHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"client","type":"address"},{"name":"amount","type":"uint256"}],"name":"deductBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'); 
FidSuranceContract = web3.eth.contract(abi);

contractInstance = FidSuranceContract.at('0x24f0247982bcb372614fda6ab958ac75498515b9');
web3.eth.defaultAccount = web3.eth.accounts[0];

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/1/medicine', (req, res) => {
   fs.readFile('data.txt' , (err, data) => {
   		if (err) {
     	 return console.log(err);
     	 res.end();
   		}
   		res.json( JSON.parse(data) );
	});
});

app.post('/2/claim' , (req,res) => {
	//console.log('claim');
	fs.writeFile('data.txt', JSON.stringify( req.body ) , ( err )=>{
		if(err){
			console.log(err);
			res.end('');
		}
		var hash = crypto.createHash('sha1');
		hash.setEncoding('hex');
		hash.write( JSON.stringify( req.body ) );
		hash.end();
		console.log("Data stored securely with hash : " + hash.read() );
		contractInstance.addBalance( web3.eth.accounts[2] , req.body.expense );//.call( { from: web3.eth.accounts[0] , gas: 3000000 });
		contractInstance.addHash( hash.read() , web3.eth.accounts[1] );//.call( { from: web3.eth.accounts[0] , gas: 3000000 });
		res.json( req.body );
	});
});

app.post('/3/claim', (req,res) => {
	contractInstance.addBalance( web3.eth.accounts[2] , req.body.expense );//call({ from: web3.eth.accounts[0] , gas: 3000000 });
	res.json( req.body );
});

var server = app.listen(8081, '0.0.0.0' , function () {
   var host = server.address().address
   var port = server.address().port

   console.log("listening at http://%s:%s", host, port)
});