import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SeptimaPage } from './septima.page';
/*
describe('SeptimaPage', () => {
  let component: SeptimaPage;
  let fixture: ComponentFixture<SeptimaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeptimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

/* ejecutar en la consola: npm test */
describe('************ Página Septima',() =>
{
  let component: SeptimaPage; // variable para pagina

  beforeEach(waitForAsync(()=>
  {
    component = new SeptimaPage();// creando la pagina
  }));

  it('sumar 2 numeros',()=>{
    expect(component.sumar(2,1)).toEqual(3);
  })
  it('sumar 2 numeros 2do es negativo',()=>{
    expect(component.sumar(2,-1)).toBeGreaterThan(0);
  })

  it('sumar 2 numeros 1ro es negativo',()=>{
    expect(component.sumar(-2,1)).toBeLessThan(0);
  })

  it('dividir por 2 numero enteros',()=>{
    expect(component.division(2,2)).toEqual(1);
  })
  it('dividir por numero negativo',()=>{
    expect(component.division(2,-2)).toBeLessThan(0);
  })
  it('dividir por numero cero',()=>{
    expect(component.division(2,0)).toBeUndefined();
  })
  
})