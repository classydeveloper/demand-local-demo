import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "./user.model";
import { AuthService } from "./auth.service";

@Component({
  selector: 'login',
  styleUrls: [ './login.style.scss' ],
  templateUrl: './signup.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'signup-page app'
  }
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService,private router: Router) {}

  onSubmit() {
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.firstName,
      this.myForm.value.lastName
    );
    this.authService.signup(user)
      .subscribe(
        data => {console.log(data);
          this.router.navigateByUrl('/auth');

        },
        error => console.error(error)
      );

    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }
}