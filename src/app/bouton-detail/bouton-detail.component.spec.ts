import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonDetailComponent } from './bouton-detail.component';

describe('BoutonDetailComponent', () => {
  let component: BoutonDetailComponent;
  let fixture: ComponentFixture<BoutonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoutonDetailComponent]
    });
    fixture = TestBed.createComponent(BoutonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
