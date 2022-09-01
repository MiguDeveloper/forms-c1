import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacstListComponent } from './contacts-list.component';

describe('ContacstListComponent', () => {
  let component: ContacstListComponent;
  let fixture: ComponentFixture<ContacstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacstListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
