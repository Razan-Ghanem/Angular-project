export class Patient {
    key:string;
    gender: string;

    constructor(public id: number, public firstName: string, public lastName: string, public phoneNumber:string, public email:string, public address:string, public ssn:string, public country: string, public age:number) { }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
