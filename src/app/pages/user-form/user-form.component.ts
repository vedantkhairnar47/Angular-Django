import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  

  ngOnInit(): void {
  }

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
  const headers = new HttpHeaders({
    'X-CLIENT-TYPE': 'WEB'
  });

    this.http.post('http://localhost:8000/api/users/', this.userForm.value,{ headers } )
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
