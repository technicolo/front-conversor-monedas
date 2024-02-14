import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMonedasComponent } from './fav-monedas.component';

describe('FavMonedasComponent', () => {
  let component: FavMonedasComponent;
  let fixture: ComponentFixture<FavMonedasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavMonedasComponent]
    });
    fixture = TestBed.createComponent(FavMonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
