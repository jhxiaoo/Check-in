import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { state } from '../state/login.selector';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  ticket: any;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(state).subscribe((data) => {
      this.ticket = data;
    });
  }

}
