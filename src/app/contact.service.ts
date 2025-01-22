import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Contacts} from './contacts';


@Injectable({
  providedIn: 'root',
})
export class ContactService {
  //private apiUrl = 'http://localhost:8080/Contacts'; // Backend API URL

  constructor(private http: HttpClient) {}

  public getAllContacts(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>('http://localhost:8080/Contacts/allContacts');
  }
  public createContact(contacts: Contacts):  Observable<Contacts> {
      return this.http.post<Contacts>('http://localhost:8080/Contacts/addContacts',contacts);
    }
}


