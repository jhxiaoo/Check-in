import { Injectable } from '@angular/core';
import { Appointment, Login } from '../interface/data';

@Injectable()
export class AuthService {
  patientList: Appointment[] = [
    {
      firstName: 'Joey',
      lastName: 'Xiao',
      address: '4126 S',
      zipCode: '12345',
      email: '123@123.com',
      phoneNumber: '1234567890',
      appointmentDateTime: '2021-05-09',
      appointmentType: 'Vaccine',
      DOB: '2020-01-01',
      city: 'Toledo',
      clinicId: '123456',
      state: 'OH'
    },
  ];
  patients: Login[] = this.patientList.map((patient) => {
    return {DOB: patient.DOB, zipCode: patient.zipCode}
  });
  
  constructor() {}

  checkUser(login: Login): boolean {
    for (let i = 0; i < this.patients.length; i++) {
        console.log(this.patients);
      if (
        this.patients[i].zipCode === login.zipCode &&
        login.DOB === this.patients[i].DOB
      ) {
        return true;
      }
    }

    return false;
  }

  getPatient(user: Login): Appointment{
    let patient = this.patientList.find(
      (patient) => user.DOB === patient.DOB && user.zipCode === patient.zipCode
    );
    return patient!;
  }
}
