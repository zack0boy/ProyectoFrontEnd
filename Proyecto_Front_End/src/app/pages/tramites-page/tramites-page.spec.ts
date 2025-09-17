import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesPage } from './tramites-page';

describe('TramitesPage', () => {
  let component: TramitesPage;
  let fixture: ComponentFixture<TramitesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TramitesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TramitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
