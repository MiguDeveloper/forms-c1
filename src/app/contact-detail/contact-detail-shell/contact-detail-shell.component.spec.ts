import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailShellComponent } from './contact-detail-shell.component';

describe('ContactDetailShellComponent', () => {
  let component: ContactDetailShellComponent;
  let fixture: ComponentFixture<ContactDetailShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
