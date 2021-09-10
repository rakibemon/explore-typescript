"use strict";
const salary = 7500;
const friendsSalary = [15000, 12000, 8000, 25000,];
let max = 0;
for (const salary of friendsSalary) {
    if (salary > max) {
        max = salary;
    }
}
