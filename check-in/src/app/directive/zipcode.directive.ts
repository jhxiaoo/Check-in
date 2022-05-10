import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Directive({
  selector: '[appZipcode]'
})
export class ZipcodeDirective {

  constructor(private ele: ElementRef, private login: LoginComponent) { }

  @HostListener('keyup', ['$event']) keyevent(event: any){
    // console.log(this.ele.nativeElement.value.split('').length);
    if(this.ele.nativeElement.value.split('').length > 5){
      this.ele.nativeElement.value = this.ele.nativeElement.value.split('').slice(-5).join('');
      this.login.form.value.zipCode = this.ele.nativeElement.value;
      console.log(this.login.form.value);
    }
  }
}
