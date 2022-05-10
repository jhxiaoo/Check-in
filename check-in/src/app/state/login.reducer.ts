import { createReducer, on } from '@ngrx/store';
import { login, logout, updatePatient } from './login.action';

export const initialState: any = {
  check: {DOB: '', zipCode: ''},
  patient: {
      firstName: '',
      lastName: '',
      DOB: '',
      zipCode: '',
      appointmentDateTime: '',
      appointmentType: '',
      city:'',
      state: '',
      clinicID: '',
  }
};

export const loginReducer = createReducer(
  initialState,
  on(login, (state, user) => {
      return {...state, check: {DOB: user.DOB, zipCode: user.zipCode}}
    }),
  on(updatePatient, (state, patient)=> {
      return {...state, patient: patient}
  }),
  on(logout, () => initialState)
);