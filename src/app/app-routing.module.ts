import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsListComponent,
    data: { title: 'Contacts' },
  },
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
