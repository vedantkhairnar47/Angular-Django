import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
      gender: ['', Validators.required]
    });

  }

  submitForm() {

    if (this.userForm.invalid) {
      return;
    }

    this.http.post('http://localhost:8000/api/users/', this.userForm.value)
      .subscribe({
        next: () => {
          this.message = 'Form submitted successfully';
          this.userForm.reset();
        },
        error: () => {
          this.message = 'Error submitting form';
        }
      });
  }
}