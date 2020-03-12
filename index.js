import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version, author } = PKG;

console.log(`${name} v${version} ${author}`);
const { genesis } = Block;

const block1 = Block.mine(genesis, 'd4t4-1');
console.log(block1.toString());

const block2 = Block.mine(block1, 'dat4-2');
console.log(block2.toString());
