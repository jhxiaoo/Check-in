import { createAction, props } from '@ngrx/store';
import { Appointment, Login } from '../interface/data';

export const login = createAction(
    'login', 
    props<Login>()
);

export const updatePatient = createAction(
    'update', 
    props<Appointment>()
);

export const logout = createAction('logout');