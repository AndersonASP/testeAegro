import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalhoesComponent } from './talhoes.component';

describe('TalhoesComponent', () => {
  let component: TalhoesComponent;
  let fixture: ComponentFixture<TalhoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalhoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalhoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
