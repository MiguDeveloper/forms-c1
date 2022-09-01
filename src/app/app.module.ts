import { ContactDetailModule } from './contact-detail/contact-detail.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { StartWithCapitalDirective } from './directives/start-with-capital.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    HeaderComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ContactDetailModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
