import process from 'process';
import ATMDispenserChain from "./atm-dispenser-chain";

const ATM = new ATMDispenserChain();
console.log(`Enter amount to withdrawal:`);
process.stdin.on('data', (data: string) => {

});