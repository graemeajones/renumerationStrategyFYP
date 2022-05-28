import Interface from './Interface.js';

export const IRenumerationStrategy = new Interface("RenumerationStrategy", ['computeMonthlyPayment']);

// Helpers
const commaSeparatedTwoDecimalPlaces = (amount) => amount.toLocaleString('en', { minimumFractionDigits: 2 });

// Strategies
export class SalaryStrategy {
  constructor(paymentDetails) {
    this.salary = paymentDetails.salary;
  }

  computeMonthlyPayment() {
    return commaSeparatedTwoDecimalPlaces(this.salary/12);
  }
}

export class HourlyStrategy {
  constructor(paymentDetails) {
    this.hourlyRate = paymentDetails.hourlyRate;
    this.numberOfHours = paymentDetails.numberOfHours;
  }

  computeMonthlyPayment() {
    return commaSeparatedTwoDecimalPlaces(this.hourlyRate*this.numberOfHours);
  }
}

export class ContractorStrategy {
  constructor(paymentDetails) {
    this.fixedMonthlyPayment = paymentDetails.fixedMonthlyPayment;
  }

  computeMonthlyPayment() {
    return commaSeparatedTwoDecimalPlaces(this.fixedMonthlyPayment);
  }
}
