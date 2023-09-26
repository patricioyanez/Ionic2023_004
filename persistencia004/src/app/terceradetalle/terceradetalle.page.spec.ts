import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerceradetallePage } from './terceradetalle.page';

describe('TerceradetallePage', () => {
  let component: TerceradetallePage;
  let fixture: ComponentFixture<TerceradetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerceradetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
