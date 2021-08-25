import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {
    key:string;
    public id: number;
    public doctor: Doctor;
    public patient: Patient;
    public reservation:string;
    constructor() { }
}
