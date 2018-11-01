pragma solidity ^0.4.0;
contract FidSurance {
    address fid;
    mapping( address => uint ) balances;
    mapping( bytes32 => address ) hashes;
    function FidSurance(){
        fid = msg.sender;
        balances[fid] = 10000000000;
    }
    function addBalance( address client, uint amount ){
        if( msg.sender != fid ) return;
        if( balances[fid] - amount < 0 ) return;
        balances[fid] -= amount;
        balances[client] += amount;
    }
    function deductBalance( address client, uint amount){
        if( msg.sender != fid ) return;
        if( balances[client] - amount < 0 ) return;
        balances[fid] += amount;
        balances[client] -= amount;
    }
    function queryBalance( address client ) returns ( uint balance ){
        if( msg.sender!=fid ) return;
        return balances[client];
    }
    function addHash( bytes32 docHash, address client ){
        if( msg.sender!=fid ) return;
        hashes[ docHash ] = client;
    }
    function checkHash ( bytes32 docHash, address client ) returns ( bool isValid ){
        if( msg.sender!=fid ) return;
        if( hashes[ docHash ] == client ) return true;
        return false;
    }
}