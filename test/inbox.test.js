const assert = require('assert');

const {Web3} = require('web3');

const ganache = require('ganache');
const { it } = require('mocha');

const web3 = new Web3(ganache.provider());

// class Car{
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(()=>{
//     car = new Car();
// })

// describe('Car', ()=>{
//     it('can park', ()=>{
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', ()=>{
//         assert.equal(car.drive(), 'vroom')
//     })
// });