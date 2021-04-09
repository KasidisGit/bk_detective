const fetch = require("node-fetch");

var totalTx = {}
var txAddressed = []
var txHashed = []

function standardizeToken(val,deci){
    let token = val/ (Math.pow(10, deci))
    return token
}

async function detectTokenTransaction(address){
    if(txAddressed.includes(address)) return
    var res = await fetch('https://api-ropsten.etherscan.io/api?module=account&action=tokentx&contractaddress='+process.argv[3]+'&address='+address+'&page=1&offset=100&sort=asc&apikey='+process.argv[2])
    res = await res.json();
    if(res.result == null || txHashed.includes(res.result.hash)) return
    if(res.result == "Max rate limit reached") return detectTokenTransaction(address)
    txAddressed.push(address)
            txFrom = res.result.filter( tx => tx.from == address)
            txFrom.forEach( tx => {
                let token = standardizeToken(tx.value, tx.tokenDecimal)
                txHashed.push(tx.hash)
                if (!totalTx.hasOwnProperty(address)){
                    totalTx[address] = -1*token
                }else{
                    new_token = totalTx[address] - token
                    totalTx[address] = new_token
                }
            console.log(`Tx: ${tx.hash} Amount: ${token} From: ${tx.from} To: ${tx.to}`)
            detectTokenTransaction(tx.to)
        })
        txTo = res.result.filter(tx => tx.to == address)
        txTo.forEach( tx => {
            if (!totalTx.hasOwnProperty(address)){
                totalTx[address] = standardizeToken(tx.value, tx.tokenDecimal)
    
            }else{
                new_token = totalTx[address] + standardizeToken(tx.value, tx.tokenDecimal)
                totalTx[address] = new_token
            }
        })
}

function detectFinalToken(obj){
    console.log('\n<---- Tracking Final Token ---->\n')
    for (const [key, value] of Object.entries(obj)) {
        console.log(`Address: ${key} Amount: ${value}`);
      }
}

async function start(){
    if(process.argv[5]==undefined) process.argv[5] = 2
    console.log('\n<---- Tracking Transaction ---->\n')
    detectTokenTransaction(process.argv[4])
    await new Promise(resolve => setTimeout(resolve, parseInt(process.argv[5])*1000))
    detectFinalToken(totalTx)
}

start();