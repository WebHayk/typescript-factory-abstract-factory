export interface Product {
    operation(): string;
}

export class ConcreteProductA implements Product {
    public operation(): string {
        return 'Result of ConcreteProductA';
    }
}

export class ConcreteProductB implements Product {
    public operation(): string {
        return 'Result of ConcreteProductB';
    }
}

export class Factory {
    public static createProduct(type: string): Product {
        switch (type) {
            case 'A':
                return new ConcreteProductA();
            case 'B':
                return new ConcreteProductB();
            default:
                throw new Error(`Unknown product type: ${type}`);
        }
    }
}
