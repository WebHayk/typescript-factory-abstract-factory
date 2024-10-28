import { AbstractFactory, ProductA, ProductB } from './AbstractFactory';

class ConcreteProductA2 implements ProductA {
    public operationA(): string {
        return 'Result of ConcreteProductA2';
    }
}

class ConcreteProductB2 implements ProductB {
    public operationB(): string {
        return 'Result of ConcreteProductB2';
    }
}

export class ConcreteFactoryB implements AbstractFactory {
    public createProductA(): ProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): ProductB {
        return new ConcreteProductB2();
    }
}
