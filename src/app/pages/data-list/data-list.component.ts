import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html'
})
export class DataListComponent implements OnInit {

  records: any[] = [];
  loading = true;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRecords();
  }

  fetchRecords(): void {
    const headers = new HttpHeaders({
      'X-CLIENT-TYPE': 'WEB'
    });

    this.http.get<any[]>('http://localhost:8000/api/users/', { headers })
      .subscribe({
        next: (data) => {
          this.records = data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.error = 'Failed to load data';
          this.loading = false;
        }
      });
  }
}
