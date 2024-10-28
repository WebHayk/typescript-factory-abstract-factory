# Design Patterns in TypeScript (Factory)

This repository contains implementations of the Abstract Factory and Factory design patterns using TypeScript.

## Abstract Factory Pattern

The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### Files

- `AbstractFactory.ts`: Defines the abstract factory and product interfaces.
- `ConcreteFactoryA.ts`: Implements the first concrete factory and its products.
- `ConcreteFactoryB.ts`: Implements the second concrete factory and its products.
- `main.ts`: Client code demonstrating the use of the abstract factories.

### Usage

To run the abstract factory implementation:

```bash
cd src/abstract-factory
tsc
node main.js
```

## Installation
1. Clone the repository.
2. Run npm install to install dependencies.
3. Use **npm run build** to compile TypeScript files.
