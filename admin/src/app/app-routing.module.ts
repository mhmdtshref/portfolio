import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import {ProjectEditComponent} from './pages/projects/project-edit/project-edit.component';
import {ProjectViewComponent} from './pages/projects/project-view/project-view.component';
import {CreateProjectComponent} from './pages/projects/create-project/create-project.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id/edit', component: ProjectEditComponent },
    { path: 'projects/create', component: CreateProjectComponent },
    { path: 'projects/:id', component: ProjectViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
