import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejomunicipalPage } from './consejomunicipal-page';

describe('ConsejomunicipalPage', () => {
  let component: ConsejomunicipalPage;
  let fixture: ComponentFixture<ConsejomunicipalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsejomunicipalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsejomunicipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
