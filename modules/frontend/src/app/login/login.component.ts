import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  sessionId: any = '';
  //   registerForm:any = FormGroup;
  submitted: boolean = false;
  loginInvalid: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  reactiveForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit() {}

  addEvent(info: string): void {}

  // #password="ngModel"

  get formControls() {
    return this.reactiveForm.controls;
  }

  login(info: string): void {
    this.submitted = true;

    if (this.reactiveForm.valid) {
      console.log(info);
      console.log('valid: ');
      console.log(this.formControls.username.valid);
    } else {
      console.log('valid: ');
      console.log(this.formControls.password.valid);
    }

    let url = '/api/login';

    this.http
      .post<any>(url, {
        username: this.model.username,
        password: this.model.password,
      })
      .subscribe((response) => {
        if (response) {
          this.sessionId = response.sessionId;

          sessionStorage.setItem('token', this.sessionId);

          this.router.navigate(['']);
          console.log('token: ' + this.sessionId);
        } else {
          alert('Failed to authenticate.');
        }
      });

    // if (this.sessionId.length == 0) {
    //   this.loginInvalid = true;
    // }
  }
}
