fs = require('fs');
Web3 = require('web3');
web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:8545/") );
console.log("Connected to Blockchain !!");
code = fs.readFileSync("FidSurance.sol").toString();
solc = require('solc');
console.log("Compiling FidSurance.sol ...");
compiledCode = solc.compile( code );
console.log("Compiled successfully!!");
abi = JSON.parse( compiledCode.contracts[":FidSurance"].interface );
console.log( "ABI: " + JSON.stringify(abi) );
byteCode = compiledCode.contracts[':FidSurance'].bytecode ;
FidSuranceContract = web3.eth.contract(abi);
console.log("Deploying ...")
deployedContract = FidSuranceContract.new({data: byteCode , from: web3.eth.accounts[0] , gas: 3000000 },
( e , contract )=>{
      if( contract.address )
        {
          console.log("Deployed successfully...\n\n\nDeployed Address : " + contract.address );
          console.log("Use the above deployed address in FidSurance.js ...\n\n");
        }
});