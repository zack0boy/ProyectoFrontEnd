import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoridadesComponent } from './autoridades-page';

describe('AutoridadesPage', () => {
  let component: AutoridadesComponent;
  let fixture: ComponentFixture<AutoridadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoridadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoridadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
