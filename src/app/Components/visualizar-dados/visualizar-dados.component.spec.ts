import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDadosComponent } from './visualizar-dados.component';

describe('VisualizarDadosComponent', () => {
  let component: VisualizarDadosComponent;
  let fixture: ComponentFixture<VisualizarDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
