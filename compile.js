const path = require('path');
const fs = require('fs');

const inboxPath = path.resolve(__dirname, 'contracts', "Inbox.sol");
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compule(source, 1));