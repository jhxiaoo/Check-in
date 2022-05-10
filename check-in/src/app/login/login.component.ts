import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../interface/data';
import { Store } from '@ngrx/store';
import { AuthService } from '../service/auth.service';
import { login, updatePatient } from '../state/login.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  login: Login = { DOB: '', zipCode: '' };
  isLoading!: boolean;
  validated: boolean = false;
  status: string = 'Continue';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private store: Store,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        DOB: ['', Validators.required],
        zipCode: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5),
          ],
        ],
      },
      {}
    );
  }

  ngOnInit() {}

  onSubmit() {
    // console.log(this.form.value);
    this.login = this.form.value;
    console.log(this.login);
    this.validated = this.auth.checkUser(this.login);
    console.log("validated: ", this.validated);
    if (this.validated) this.isLoading = true;

    setTimeout(() => {
      if (this.validated) {
        console.log('Is loading...');
        this.store.dispatch(login(this.login));
        this.store.dispatch(updatePatient(this.auth.getPatient(this.login)));
        this.isLoading = false;
        console.log('Loaded.');
        this.router.navigateByUrl('confirm');
      }
    }, 3000);
  }
}
