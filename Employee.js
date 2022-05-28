import { IRenumerationStrategy } from './RenumerationStrategy.js';

export default class Employee {

  constructor(name, renumerationStrategy) {
    IRenumerationStrategy.implementedBy(renumerationStrategy)
    this.name = name;
    this.renumerationStrategy = renumerationStrategy;
  }

  recoverMonthlyPayment() {
    return this.renumerationStrategy.computeMonthlyPayment();
  }
}