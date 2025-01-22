import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import {Contacts} from './contacts';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-root',
  imports:[CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contacts: Contacts[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((response: Contacts[]) => {
      this.contacts = response;
	  
	 // alert(contacts);
    },
	(error:HttpErrorResponse) => {
		alert(error.message);
	}
	);
  }
}
