import { Factory } from './Factory';

const productA = Factory.createProduct('A');
console.log(productA.operation());

const productB = Factory.createProduct('B');
console.log(productB.operation());
