import { ConcreteFactoryA } from './ConcreteFactoryA';
import { ConcreteFactoryB } from './ConcreteFactoryB';
import {AbstractFactory} from "./AbstractFactory";

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productA.operationA());
    console.log(productB.operationB());
}

console.log('Client: Testing client code with factory A.');
clientCode(new ConcreteFactoryA());

console.log('');

console.log('Client: Testing client code with factory B.');
clientCode(new ConcreteFactoryB());
