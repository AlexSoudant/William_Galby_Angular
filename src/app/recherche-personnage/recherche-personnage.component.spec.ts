import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePersonnageComponent } from './recherche-personnage.component';

describe('RecherchePersonnageComponent', () => {
  let component: RecherchePersonnageComponent;
  let fixture: ComponentFixture<RecherchePersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchePersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
