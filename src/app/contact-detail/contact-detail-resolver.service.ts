import { Contact } from './../contact.model';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ContactService } from './../contact.service';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailResolverService implements Resolve<Contact>{

  constructor(private contactService:ContactService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
    const id = Number(route.paramMap.get('id'));
    const contact = this.contactService.getContactById(id);

    if (contact) {
      return of(contact)
    } else {
      this.router.navigate(['/not-found']);
      return EMPTY
    }
  }

  
}
