import Employee from './Employee.js';
import { SalaryStrategy, HourlyStrategy, ContractorStrategy } from './RenumerationStrategy.js';

const employee1 = new Employee("Jane Smith", new SalaryStrategy({ salary: 120000 }));
console.log(employee1.name + ": " + employee1.recoverMonthlyPayment());

const employee2 = new Employee("Bob Jones", new HourlyStrategy({ hourlyRate: 100, numberOfHours: 176 }));
console.log(employee2.name + ": " + employee2.recoverMonthlyPayment());

const employee3 = new Employee("Ahmed Rahman", new ContractorStrategy({ fixedMonthlyPayment: 14000 }));
console.log(employee3.name + ": " + employee3.recoverMonthlyPayment());
