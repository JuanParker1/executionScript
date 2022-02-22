//gasLevel: SafeGasPrice, ProposeGasPrice, FastGasPrice
//gasOffset: in wei 

const config = {
    networkSettings: {
        BSC: {
            gasLevel:'SafeGasPrice',
            gasOffset:0.1,
            updatingRpc: false,
            currentRpc: 'https://bsc-dataseed3.defibit.io',
            rpcOptions: ["https://bsc-dataseed3.defibit.io", 'https://bsc-dataseed.binance.org', 'https://bsc-dataseed4.binance.org'],
            checkGas: true,
            gasApi: "https://gbsc.blockscan.com/gasapi.ashx?apikey=key&method=gasoracle",
            gasPrice: '5100000000'
        },
        POLYGON: {
            gasLevel:'ProposeGasPrice',
            gasOffset:10,
            updatingRpc: false,
            currentRpc: 'https://polygon-rpc.com/',
            rpcOptions: ["https://polygon-rpc.com/"],
            checkGas: false,
            gasApi: "https://gpoly.blockscan.com/gasapi.ashx?apikey=key&method=gasoracle",
            gasPrice: '100000000000'
        },
        BSCTEST: {
            gasLevel:'SafeGasPrice',
            gasOffset:1,
            updatingRpc: false,
            currentRpc: 'https://speedy-nodes-nyc.moralis.io/1d0a9164468a9049fed45295/bsc/testnet',
            rpcOptions: ["https://speedy-nodes-nyc.moralis.io/1d0a9164468a9049fed45295/bsc/testnet", 'https://data-seed-prebsc-1-s1.binance.org:8545/'],
            checkGas: false,
            gasApi: "https://gbsc.blockscan.com/gasapi.ashx?apikey=key&method=gasoracle",
            gasPrice: '10000000000'
        },
        POLYGONTEST: {
            gasLevel:'ProposeGasPrice',
            gasOffset:10,
            updatingRpc: false,
            currentRpc: 'https://matic-mumbai.chainstacklabs.com',
            rpcOptions: ["https://matic-mumbai.chainstacklabs.com"],
            checkGas: false,
            gasApi: "https://gpoly.blockscan.com/gasapi.ashx?apikey=key&method=gasoracle",
            gasPrice: '10000000000'
        },
    },
    stockHours: {
        startHour:13,
        startMin:30,
        endHour:20
    },
    moralis: {
        serverUrl: "https://k1hrjlf4rzgm.usemoralis.com:2053/server",
        appId: "8gdNI2jhASctAwzA3OeUGrwx96fhDX18M5P7qNyy"
    }
}

module.exports = config