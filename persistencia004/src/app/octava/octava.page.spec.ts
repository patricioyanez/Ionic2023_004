import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { OctavaPage } from './octava.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
/*
describe('OctavaPage', () => {
  let component: OctavaPage;
  let fixture: ComponentFixture<OctavaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OctavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

*/

describe('====== Pagina octava', ()=>{
  let component: OctavaPage;
  let fixture: ComponentFixture<OctavaPage>;

  beforeEach(waitForAsync( async()=>{
    await TestBed.configureTestingModule({
      declarations: [OctavaPage],
      imports: [IonicModule.forRoot(), FormsModule, 
        RouterTestingModule ]
    }).compileComponents();
    fixture = TestBed.createComponent(OctavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }))

  it('______ Botón sumar', fakeAsync(()=>{
    fixture.componentInstance.n1 = 20
    fixture.componentInstance.n2 = 20
    document.getElementById('btnSumar')?.click();
    fixture.detectChanges();
    tick();
    const resultado = (<HTMLInputElement>document.getElementById('resultado')).value;
    expect(resultado).toContain('40');
  }))

})
