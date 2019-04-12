import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjecListComponent } from './card-projec-list.component';

describe('CardProjecListComponent', () => {
  let component: CardProjecListComponent;
  let fixture: ComponentFixture<CardProjecListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProjecListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProjecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
