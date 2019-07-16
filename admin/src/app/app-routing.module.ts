import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import {ProjectEditComponent} from './pages/projects/project-edit/project-edit.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id/edit', component: ProjectEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
