import { Toastr, TOASTR_TOKEN } from './../common/toastr.service';
import { AuthService } from './auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
  em{
    float:right;
    color:#E05C65;
    padding-left:10px;
}
input.error{
  background-color: #E3C3C5;

}
.error::-webkit-input-placeholder{color:#999}
.error::-moz-placeholder{color:#999}
.error:-moz-placeholder{color:#999}
.error :ms-input-placeholder{color:#999}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService,
     private router: Router,
     @Inject(TOASTR_TOKEN)private toastr: Toastr
     ) {
  }

  ngOnInit() {
      this.firstName = new FormControl(this.authService.currentUser.firstName, [ Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    console.log(this.profileForm.valid);
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      .subscribe(() => {
        this.toastr.success('Profile Saved');
      });
      // this.router.navigate(['events']);
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

  validateFirstName() {

    return this.firstName.invalid && this.firstName.touched;
  }

  validateLastName() {

    return this.lastName.invalid && this.lastName.touched;
  }

}
