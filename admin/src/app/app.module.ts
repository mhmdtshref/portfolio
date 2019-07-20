import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SectionsListComponent } from './sections-list/sections-list.component';
import { SectionComponent } from './section/section.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './usable/project/project.component';
import { PopUpComponent } from './usable/pop-up/pop-up.component';
import { ProjectEditComponent } from './pages/projects/project-edit/project-edit.component';
import {FormsModule} from '@angular/forms';
import { ProjectViewComponent } from './pages/projects/project-view/project-view.component';
import { CreateProjectComponent } from './pages/projects/create-project/create-project.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SectionsListComponent,
    SectionComponent,
    MainComponent,
    ProjectsComponent,
    ProjectComponent,
    PopUpComponent,
    ProjectEditComponent,
    ProjectViewComponent,
    CreateProjectComponent,
    LoginComponent,
    FooterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
