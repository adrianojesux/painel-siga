import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClientListComponent } from './card-client-list.component';

describe('CardClientListComponent', () => {
  let component: CardClientListComponent;
  let fixture: ComponentFixture<CardClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardClientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
