if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("https://jsonrpc.egem.io/custom"));
}

var cBlock = web3.eth.blockNumber;
var balance0 = web3.fromWei(web3.eth.getBalance("0x3fa6576610cac6c68e88ee68de07b104c9524fda"), "ether");
var balance1 = web3.fromWei(web3.eth.getBalance("0xfc0f0a5F06cB00c9EB435127142ac79ac6F48B94"), "ether");
var balance2 = web3.fromWei(web3.eth.getBalance("0x0666bf13ab1902de7dee4f8193c819118d7e21a6"), "ether");
var balance3 = web3.fromWei(web3.eth.getBalance("0xcEf0890408b4FC0DC025c8F581c77383529D38B6"), "ether");

function qBalance() {
    var x = document.querySelector('[name="addressInput"]').value;
    var uBalance = web3.fromWei(web3.eth.getBalance(x), "ether");
    document.getElementById('balance').innerText = 'Balance: ' + uBalance;
}

function qDevsBalance() {
  var balance0 = web3.fromWei(web3.eth.getBalance("0x3fa6576610cac6c68e88ee68de07b104c9524fda"), "ether");
  var balance1 = web3.fromWei(web3.eth.getBalance("0xfc0f0a5F06cB00c9EB435127142ac79ac6F48B94"), "ether");
  var balance2 = web3.fromWei(web3.eth.getBalance("0x0666bf13ab1902de7dee4f8193c819118d7e21a6"), "ether");
  var balance3 = web3.fromWei(web3.eth.getBalance("0xcEf0890408b4FC0DC025c8F581c77383529D38B6"), "ether");
    document.getElementById("bal0").innerText = balance0;
    document.getElementById("bal1").innerText = balance1;
    document.getElementById("bal2").innerText = balance2;
    document.getElementById("bal3").innerText = balance3;
}

function lBlock() {
       var cBlock = web3.eth.blockNumber;
       document.getElementById("cBlock").innerText = cBlock;
}
