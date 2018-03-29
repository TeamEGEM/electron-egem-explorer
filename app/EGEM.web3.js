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
    document.getElementById('balance').innerText = uBalance;
}

function qTx() {
    var x = document.querySelector('[name="txInput"]').value;
    txObj = web3.eth.getTransaction(x);
    data = JSON.stringify(txObj);
    obj = JSON.parse(data);
    document.getElementById("blockhash").innerHTML = obj.blockHash;
    document.getElementById("gas").innerHTML = obj.gas;
    document.getElementById("number").innerHTML = obj.blockNumber;
    document.getElementById("nonce").innerHTML = obj.nonce;
}

function qBlock() {
    var x = document.querySelector('[name="blockInput"]').value;
    txObj = web3.eth.getBlock(x);
    blkTxs = web3.eth.getBlockTransactionCount(x);
    blkUnc = web3.eth.getBlockUncleCount(x);
    data = JSON.stringify(txObj);
    obj = JSON.parse(data);
    document.getElementById("hash").innerHTML = obj.hash;
    document.getElementById("pHash").innerHTML = obj.parentHash;
    document.getElementById("timestamp").innerHTML = obj.timestamp;
    document.getElementById("miner").innerHTML = obj.miner;
    document.getElementById("nonce").innerHTML = obj.nonce;
    document.getElementById("size").innerHTML = obj.size;
    document.getElementById("btransactions").innerHTML = blkTxs;
    document.getElementById("buncles").innerHTML = blkUnc;
}

function qDevsBalance() {
  var balance0 = web3.fromWei(web3.eth.getBalance("0x3fa6576610cac6c68e88ee68de07b104c9524fda"), "ether");
  var balance1 = web3.fromWei(web3.eth.getBalance("0xfc0f0a5F06cB00c9EB435127142ac79ac6F48B94"), "ether");
  var balance2 = web3.fromWei(web3.eth.getBalance("0x0666bf13ab1902de7dee4f8193c819118d7e21a6"), "ether");
  var balance3 = web3.fromWei(web3.eth.getBalance("0xcEf0890408b4FC0DC025c8F581c77383529D38B6"), "ether");
    document.getElementById("bal0").innerText = balance0
    document.getElementById("bal1").innerText = balance1
    document.getElementById("bal2").innerText = balance2
    document.getElementById("bal3").innerText = balance3
}

function lBlock() {
       var cBlock = web3.eth.blockNumber;
       document.getElementById("cBlock").innerText = cBlock;
}

function sHashrate() {
      fetch('https://pool.egem.io/api/miners')
          .then(response => response.json())
          .then(data => {
              document.getElementById("hashrate").innerHTML = data.hashrate;
          })
          .catch(err => {
              console.error('An error ocurred', err);
          });
      fetch('https://pool.egem.io/api/stats')
          .then(response => response.json())
          .then(data => {
              document.getElementById("miners").innerHTML = data.minersTotal;
              document.getElementById("minedBlocks").innerHTML = data.maturedTotal;
              document.getElementById("newBlocks").innerHTML = data.candidatesTotal;
          })
          .catch(err => {
              console.error('An error ocurred', err);
          });
}
