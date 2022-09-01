import { Contact } from '../contact.model';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacst-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacst-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Contact[]> = new Observable();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$;
  }

}
