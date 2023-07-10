const assert = require('assert');

const {Web3} = require('web3');

const ganache = require('ganache');

const web3 = new Web3(ganache.provider());