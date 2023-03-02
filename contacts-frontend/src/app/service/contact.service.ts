import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/contacts'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  newContact(data): Observable<any> {
    return this.http.post(url, data)
  }

  getContacts(): Observable<any> {
    return this.http.get(url)
  }

  getSingleContacts(id:Number): Observable<any> {
    return this.http.get(url + `/${id}`)
  }

  updateSingleContacts(id:Number, data): Observable<any> {
    return this.http.patch(url + `/${id}`, data)
  }

  deleteSingleContacts(id:Number): Observable<any> {
    return this.http.delete(url + `/${id}`)
  }

}
