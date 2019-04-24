import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefasRoutes } from './tarefas';

export const routes: Routes = [
    {path: '', redirectTo: '/tarefas/listar', pathMatch: 'full'},
    ...TarefasRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
