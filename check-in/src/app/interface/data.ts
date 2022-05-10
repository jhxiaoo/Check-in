export interface Login {
    DOB: string;
    zipCode: string;
}

export interface Appointment {
    address?: string;
    appointmentDateTime: string;
    appointmentType?: string;
    city?: string;
    clinicId?: string;
    email?: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    state?: string;
    zipCode: string;
    DOB: string;
}