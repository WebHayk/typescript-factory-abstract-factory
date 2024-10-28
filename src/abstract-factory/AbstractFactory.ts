export interface AbstractFactory {
    createProductA(): ProductA;
    createProductB(): ProductB;
}

export interface ProductA {
    operationA(): string;
}

export interface ProductB {
    operationB(): string;
}
