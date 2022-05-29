import Employee from './Employee.js';
import { SalaryStrategy, HourlyStrategy, ContractorStrategy } from './RenumerationStrategy.js';

// Helpers
const reportMonthlyPayment = (name, amount) => console.log(`Pay ${name} £${amount} this month.`);

// Different renumeration strategies
const employee1 = new Employee("Jane Smith");
const salaryDetails = { salary: 120000 };
const salaryStrategy = new SalaryStrategy(salaryDetails);
employee1.setRenumerationStrategy(salaryStrategy);
reportMonthlyPayment(employee1.name, employee1.recoverMonthlyPayment());

const employee2 = new Employee("Bob Jones");
const hourlyPaidDetails = { hourlyRate: 100, numberOfHours: 176 };
const hourlyPaidStrategy = new HourlyStrategy(hourlyPaidDetails);
employee2.setRenumerationStrategy(hourlyPaidStrategy);
reportMonthlyPayment(employee2.name, employee2.recoverMonthlyPayment());

const employee3 = new Employee("Ahmed Rahman");
const contractorDetails = { fixedMonthlyPayment: 14000 };
const contractorStrategy = new ContractorStrategy(contractorDetails);
employee3.setRenumerationStrategy(contractorStrategy);
reportMonthlyPayment(employee3.name, employee3.recoverMonthlyPayment());
