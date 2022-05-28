import Interface from './Interface.js';

export const IRenumerationStrategy = new Interface("RenumerationStrategy", ['computeMonthlyPayment']);

export class SalaryStrategy {
  constructor(paymentDetails) {
    this.salary = paymentDetails.salary;
  }

  computeMonthlyPayment() {
    return (this.salary/12).toFixed(2);
  }
}

export class HourlyStrategy {
  constructor(paymentDetails) {
    this.hourlyRate = paymentDetails.hourlyRate;
    this.numberOfHours = paymentDetails.numberOfHours;
  }

  computeMonthlyPayment() {
    return (this.hourlyRate*this.numberOfHours).toFixed(2);
  }
}

export class ContractorStrategy {
  constructor(paymentDetails) {
    this.fixedMonthlyPayment = paymentDetails.fixedMonthlyPayment;
  }

  computeMonthlyPayment() {
    return (this.fixedMonthlyPayment).toFixed(2);
  }
}
