/**
 * Automatically generated code, via genWeb3API.js
 * Do not modify manually
 */
const axios = require('axios');

class Web3Api {
  static initialize(serverUrl, Moralis = null) {
    this.serverUrl = serverUrl;
    this.Moralis = Moralis;
  }

  static async apiCall(name, options) {
    if (!this.serverUrl) {
      throw new Error('Web3Api not initialized, run Moralis.start() first');
    }

    if(this.Moralis) {
      const { web3 } = this.Moralis;
      
      if (!options.address && web3) {
        options.address = await (await web3.eth.getAccounts())[0];
      }
    }

    try {
      const http = axios.create({ baseURL: this.serverUrl });
      if (!options.chain) options.chain = 'eth';
      
      const response =  await http.post(`/functions/${name}`, options, {
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      });
      return response.data.result
    } catch (error) {
      if (error.response) { 
        throw error.response.data;
      }
      throw error;
    }
  }

  static native = {
    getBlock: async (options = {}) => Web3Api.apiCall('getBlock', options),
    getDateToBlock: async (options = {}) => Web3Api.apiCall('getDateToBlock', options),
    getLogsByAddress: async (options = {}) => Web3Api.apiCall('getLogsByAddress', options),
    getNFTTransfersByBlock: async (options = {}) => Web3Api.apiCall('getNFTTransfersByBlock', options),
    getTransaction: async (options = {}) => Web3Api.apiCall('getTransaction', options),
    getContractEvents: async (options = {}) => Web3Api.apiCall('getContractEvents', options),
    runContractFunction: async (options = {}) => Web3Api.apiCall('runContractFunction', options),
  }

  static account = {
    getTransactions: async (options = {}) => Web3Api.apiCall('getTransactions', options),
    getTransactionsVerbose: async (options = {}) => Web3Api.apiCall('getTransactionsVerbose', options),
    getNativeBalance: async (options = {}) => Web3Api.apiCall('getNativeBalance', options),
    getTokenBalances: async (options = {}) => Web3Api.apiCall('getTokenBalances', options),
    getTokenTransfers: async (options = {}) => Web3Api.apiCall('getTokenTransfers', options),
    getNFTs: async (options = {}) => Web3Api.apiCall('getNFTs', options),
    getNFTTransfers: async (options = {}) => Web3Api.apiCall('getNFTTransfers', options),
    getWalletNFTCollections: async (options = {}) => Web3Api.apiCall('getWalletNFTCollections', options),
    getNFTsForContract: async (options = {}) => Web3Api.apiCall('getNFTsForContract', options),
  }

  static token = {
    getTokenMetadata: async (options = {}) => Web3Api.apiCall('getTokenMetadata', options),
    getNFTTrades: async (options = {}) => Web3Api.apiCall('getNFTTrades', options),
    getNFTLowestPrice: async (options = {}) => Web3Api.apiCall('getNFTLowestPrice', options),
    getTokenMetadataBySymbol: async (options = {}) => Web3Api.apiCall('getTokenMetadataBySymbol', options),
    getTokenPrice: async (options = {}) => Web3Api.apiCall('getTokenPrice', options),
    getTokenAddressTransfers: async (options = {}) => Web3Api.apiCall('getTokenAddressTransfers', options),
    getTokenAllowance: async (options = {}) => Web3Api.apiCall('getTokenAllowance', options),
    searchNFTs: async (options = {}) => Web3Api.apiCall('searchNFTs', options),
    getNftTransfersFromToBlock: async (options = {}) => Web3Api.apiCall('getNftTransfersFromToBlock', options),
    getAllTokenIds: async (options = {}) => Web3Api.apiCall('getAllTokenIds', options),
    getMultipleNFTs: async (options = {}) => Web3Api.apiCall('getMultipleNFTs', options),
    getContractNFTTransfers: async (options = {}) => Web3Api.apiCall('getContractNFTTransfers', options),
    getNFTOwners: async (options = {}) => Web3Api.apiCall('getNFTOwners', options),
    getNFTMetadata: async (options = {}) => Web3Api.apiCall('getNFTMetadata', options),
    reSyncMetadata: async (options = {}) => Web3Api.apiCall('reSyncMetadata', options),
    getTokenIdMetadata: async (options = {}) => Web3Api.apiCall('getTokenIdMetadata', options),
    getTokenIdOwners: async (options = {}) => Web3Api.apiCall('getTokenIdOwners', options),
    getWalletTokenIdTransfers: async (options = {}) => Web3Api.apiCall('getWalletTokenIdTransfers', options),
  }

  static contract = {
    syncNFTContract: async (options = {}) => Web3Api.apiCall('syncNFTContract', options),
  }

  static resolve = {
    resolveDomain: async (options = {}) => Web3Api.apiCall('resolveDomain', options),
    resolveAddress: async (options = {}) => Web3Api.apiCall('resolveAddress', options),
  }

  static defi = {
    getPairReserves: async (options = {}) => Web3Api.apiCall('getPairReserves', options),
    getPairAddress: async (options = {}) => Web3Api.apiCall('getPairAddress', options),
  }

  static storage = {
    uploadFolder: async (options = {}) => Web3Api.apiCall('uploadFolder', options),
  }

  static info = {
    web3ApiVersion: async (options = {}) => Web3Api.apiCall('web3ApiVersion', options),
    endpointWeights: async (options = {}) => Web3Api.apiCall('endpointWeights', options),
  }
}

export default Web3Api;
