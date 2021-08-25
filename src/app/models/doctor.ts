export class Doctor {
    key:string;

    constructor(public id: number, public firstName: string, public lastName: string,  public address:string, public notes:string, public phoneNumber:string, public email:string, public monthlySalary:number, public iban:string, public country:string) { }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
