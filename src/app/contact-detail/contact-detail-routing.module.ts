import { ContactDetailResolverService } from './contact-detail-resolver.service';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailShellComponent } from './contact-detail-shell/contact-detail-shell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact-detail',
    component: ContactDetailShellComponent,
    data: { title: 'Contact detail' },
    children: [
      {
        path: '',
        component: ContactFormComponent,
      },
      {
        path: ':id',
        component: ContactDetailComponent,
        resolve: { contact: ContactDetailResolverService },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactDetailRoutingModule {}
