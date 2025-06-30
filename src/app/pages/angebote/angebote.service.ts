import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AngeboteService {
  private apiUrl = 'http://localhost:3000/angebote'; // json-server yoki real API

  constructor(private http: HttpClient) {}

  saveAngebot(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getAngebote(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteAngebot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateAngebot(id: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  }
}
