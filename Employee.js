import Interface from './Interface.js';
import { IRenumerationStrategy } from './RenumerationStrategy.js';

export default class Employee {

  constructor(name, renumerationStrategy) {
    Interface.ensureImplements(renumerationStrategy,IRenumerationStrategy)
    this.name = name;
    this.renumerationStrategy = renumerationStrategy;
  }

  recoverMonthlyPayment() {
    return this.renumerationStrategy.computeMonthlyPayment();
  }

}