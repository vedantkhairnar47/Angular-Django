import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html'
})
export class DataListComponent implements OnInit {

  records: any[] = [];
  loading = true;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRecords();
  }

  fetchRecords() {
    this.http.get<any[]>('http://localhost:8000/api/users/')
      .subscribe({
        next: (data) => {
          this.records = data;
          this.loading = false;
        },
        error: () => {
          this.error = 'Failed to load data';
          this.loading = false;
        }
      });
  }
}
