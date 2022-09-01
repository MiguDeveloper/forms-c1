import { Contact } from './../contact.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() contact!: Contact;
  @Output() clicked: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {    
    this.clicked.emit(this.contact.id);
  }
}
