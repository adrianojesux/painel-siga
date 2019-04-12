import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaHomeComponent } from './card-lista-home.component';

describe('CardListaHomeComponent', () => {
  let component: CardListaHomeComponent;
  let fixture: ComponentFixture<CardListaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
