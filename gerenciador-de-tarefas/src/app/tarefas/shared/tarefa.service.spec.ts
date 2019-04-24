import { TestBed } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa.model';
import { empty } from 'rxjs';

describe('TarefaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarefaService = TestBed.get(TarefaService);
    expect(service).toBeTruthy();
  });

  it('deve cadastrar tarefa no localStora ', () => {
    const service: TarefaService = TestBed.get(TarefaService);
    const tarefa = new Tarefa(new Date().getTime(), 'tarefa teste', false);
    service.cadastrar(tarefa);
    expect(localStorage.length).toBeGreaterThan(0);
  });

});
