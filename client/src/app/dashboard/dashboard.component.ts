import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { EncrDecrService } from '../services/encrdecr.service';
import { PassportAPIService } from '../services/passport-api.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'client';
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  first_name = new FormControl('', [Validators.required]);
  last_name = new FormControl('', []);
  pass_num = new FormControl('', [Validators.required]);
  id = new FormControl('', [Validators.required])
  selected = new FormControl(0);
  constructor(
    private EncrDecr: EncrDecrService, 
    private passport: PassportAPIService,
    ) {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', this.pass_num.value);
    this.passport.uploadPassport(this.first_name.value, this.last_name.value, encrypted, this.email.value).subscribe(res => {
            var url = res.data;
            var id = url.substring(url.lastIndexOf('/') + 1);
            this.id.patchValue(id)
            this.selected.setValue(1);
      })
  }

  onRetrieve() {
    this.passport.retrieveDetails(this.id.value).subscribe(res =>{
        this.email.patchValue(res.data.email)
        this.first_name.patchValue(res.data.firstName)
        this.last_name.patchValue(res.data.lastName)
        this.pass_num.patchValue(this.EncrDecr.get('123456$#@$^@1ERF', res.data.passNum));
        this.selected.setValue(0);
      })
  }
}
