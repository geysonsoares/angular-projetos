import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

export const TarefasRoutes: Routes = [
    {path: 'tarefas', redirectTo: 'tarefas/listar'},
    {path: 'tarefas/listar', component: ListarTarefaComponent},
    {path: 'tarefas/cadastrar', component: CadastrarTarefaComponent}
];
