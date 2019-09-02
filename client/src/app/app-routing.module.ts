import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './pages/projects/projects.component';
import {MainComponent} from './pages/main/main.component';
import {ProjectDetailsComponent} from './pages/projects/project-details/project-details.component';
import {LanguagesComponent} from "./pages/languages/languages.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'languages', component: LanguagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
