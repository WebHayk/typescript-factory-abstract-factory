import { AbstractFactory, ProductA, ProductB } from './AbstractFactory';

class ConcreteProductA1 implements ProductA {
    public operationA(): string {
        return 'Result of ConcreteProductA1';
    }
}

class ConcreteProductB1 implements ProductB {
    public operationB(): string {
        return 'Result of ConcreteProductB1';
    }
}

export class ConcreteFactoryA implements AbstractFactory {
    public createProductA(): ProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): ProductB {
        return new ConcreteProductB1();
    }
}
