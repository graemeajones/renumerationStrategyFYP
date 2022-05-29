import { IRenumerationStrategy } from './RenumerationStrategy.js';

export default class Employee {

  constructor(name) {
    this.name = name;
  }

  setRenumerationStrategy(renumerationStrategy) {
    IRenumerationStrategy.implementedBy(renumerationStrategy)
    this.renumerationStrategy = renumerationStrategy;
  }

  recoverMonthlyPayment() {
    return this.renumerationStrategy.computeMonthlyPayment();
  }
}