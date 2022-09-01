import { StartWithCapitalDirective } from './../directives/start-with-capital.directive';
import { ContactDetailRoutingModule } from './contact-detail-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailShellComponent } from './contact-detail-shell/contact-detail-shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactDetailComponent,
    ContactFormComponent,
    ContactDetailShellComponent,
    StartWithCapitalDirective
  ],
  imports: [
    ContactDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ContactDetailModule { }
