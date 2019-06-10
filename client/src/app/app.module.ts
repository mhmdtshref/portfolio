import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { CardComponent } from './card/card.component';
import { SocialComponent } from './social/social.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectsComponent,
    LanguagesComponent,
    TechnologiesComponent,
    NavbarComponent,
    HeaderComponent,
    SectionComponent,
    CardComponent,
    SocialComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
