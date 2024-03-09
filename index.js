// 计算以太坊地址的校验和
function generateChecksumAddress(web3, address) {
  return web3.utils.toChecksumAddress(address);
}

// 获取指定智能合约的当前所有者
async function getContractOwner(web3, contract) {
  return contract.methods.owner().call();
}

// 获取以太坊账户的链 ID
async function getChainId(web3) {
  return web3.eth.getChainId();
}