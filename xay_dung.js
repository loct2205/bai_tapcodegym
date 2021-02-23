class Emplyee {
    constructor(id, fistName, lastName, salary ){
    this.id=id;
    this.fistName=fistName;
    this.lastName=lastName;
    this.salary=salary;
    }
    getID() {
        return this.id;
    }
    getFirstName() {
        return this.fistName;
    }
    getLastName() {
        return this.lastName;
    }
    getName() {
        return this.fistName+this.lastName;
    }
    getSalary() {
        return this.salary;
    }
    getAnnualSalary() {
        return this.salary*12;
    }
    raiseSalary(up) {
        this.salary= this.salary*(up/100) + this.salary;
    }

}
let emplyee= new Emplyee(1001010,"Binh An","Pham", 10000000);
document.writeln(emplyee.getName()+"</br>");
document.writeln(emplyee.getSalary()+"</br>");
document.writeln(emplyee.getAnnualSalary()+"</br>");
emplyee.raiseSalary(20);
document.writeln(emplyee.getSalary()+"</br>");
document.writeln(emplyee.getAnnualSalary()+"</br>");
