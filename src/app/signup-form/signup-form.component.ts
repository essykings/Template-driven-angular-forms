import { Component } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  gender = ['Male','Female','Other']
  
  user = new User(1,'john@example.com','secret', 'secret', 
  this.gender[1], true);

  newUser() {
    this.user = new User(2, 'thisisfromthemodel@example.com', '','','Male',false);
  }

  
  submitted = false;


  onSubmit({value, valid}: NgForm) {
    console.log( this.user.email);
    console.log("valid: " + valid);
  }


}


