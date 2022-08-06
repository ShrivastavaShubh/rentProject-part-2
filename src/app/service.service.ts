import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiKey = environment.apiKey;
  private baseKey = environment.base
  refreshgridSubject = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  public getPropertyList() {
    const headers = { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' };
    return this.http.get(`https://api.airtable.com/v0/${this.baseKey}/shubham`, { headers })

  }
  public addProperty(data: any) {
    const headers = { 'Authorization': `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' };
    return this.http.post(`https://api.airtable.com/v0/${this.baseKey}/shubham`, data, { headers });
  }
}
