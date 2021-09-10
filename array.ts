const salary:number = 7500;
const friendsSalary:number[]=[15000,12000,8000,25000,]
let max = 0;
for (const salary of friendsSalary){
    if(salary>max){
        max=salary;
    }
}