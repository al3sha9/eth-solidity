// Import required modules and libraries
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

// Set up a provider using HDWalletProvider with the specified mnemonic and Infura endpoint
const provider = new HDWalletProvider(
    'nominee scare badge tissue rifle aware wheat delay budget edge ask sample',
    'https://sepolia.infura.io/v3/b210630ad62a4910a64f2ab361c2210a'
);

// Create an instance of Web3 using the provider
const web3 = new Web3(provider);

// Define the deploy function to deploy a smart contract to the blockchain
const deploy = async () => {
    // Get the list of accounts available from the provider
    const accounts = await web3.eth.getAccounts();

    // Log the first account, which will be used to deploy the contract
    console.log('Attempting to deploy from account', accounts[0]);

    // Create a new contract instance, deploy it to the blockchain with bytecode and constructor arguments
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi There'] })
        .send({ gas: '1000000', from: accounts[0] });

    // Log the contract address where the contract is deployed
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();

};

// Call the deploy function to initiate the deployment
deploy();
