import Employee from './Employee.js';
import { SalaryStrategy, HourlyStrategy, ContractorStrategy } from './RenumerationStrategy.js';

const reportMonthlyPayment = (name, amount) => {
  console.log(`Pay ${name} £${amount} this month.`);
}

const salaryDetails = { salary: 120000 };
const employee1 = new Employee("Jane Smith", new SalaryStrategy(salaryDetails));
reportMonthlyPayment(employee1.name, employee1.recoverMonthlyPayment());

const hourlyPaidDetails = { hourlyRate: 100, numberOfHours: 176 };
const employee2 = new Employee("Bob Jones", new HourlyStrategy(hourlyPaidDetails));
reportMonthlyPayment(employee2.name, employee2.recoverMonthlyPayment());

const contractorDetails = { fixedMonthlyPayment: 14000 };
const employee3 = new Employee("Ahmed Rahman", new ContractorStrategy(contractorDetails));
reportMonthlyPayment(employee3.name, employee3.recoverMonthlyPayment());
