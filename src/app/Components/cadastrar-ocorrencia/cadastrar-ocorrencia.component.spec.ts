import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOcorrenciaComponent } from './cadastrar-ocorrencia.component';

describe('CadastrarOcorrenciaComponent', () => {
  let component: CadastrarOcorrenciaComponent;
  let fixture: ComponentFixture<CadastrarOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
