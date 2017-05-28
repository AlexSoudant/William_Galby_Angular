import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonnageComponent } from './details-personnage.component';

describe('DetailsPersonnageComponent', () => {
  let component: DetailsPersonnageComponent;
  let fixture: ComponentFixture<DetailsPersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
