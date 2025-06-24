import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // avtomatik injection
})
export class AddressService {
  private baseUrl = 'https://your-api.com/api/address'; // Bu URL backenddan keladi

  constructor(private http: HttpClient) {}

  getCities(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/cities`);
  }

  getStreets(city: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/streets?city=${city}`);
  }

  validateAddress(
    plz: string,
    ort: string,
    strasse: string,
    hausnummer: string
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/validate`, {
      plz,
      ort,
      strasse,
      hausnummer,
    });
  }
}
