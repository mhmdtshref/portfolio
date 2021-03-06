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
import { SocialComponent } from './social/social.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner';
import { ProjectCardComponent } from './sections/projects-section/project-card/project-card.component';
import { ServiceCardComponent } from './sections/services-section/service-card/service-card.component';
import { LanguageCardComponent } from './sections/languages-section/language-card/language-card.component';
import { TechnologyCardComponent } from './sections/technologies-section/technology-card/technology-card.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { LanguagesSectionComponent } from './sections/languages-section/languages-section.component';
import { TechnologiesSectionComponent } from './sections/technologies-section/technologies-section.component';
import { FooterComponent } from './footer/footer.component';
import { SectionsListComponent } from './sections-list/sections-list.component';
import { SectionIconComponent } from './section-icon/section-icon.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';
import { SocialsSectionComponent } from './sections/socials-section/socials-section.component';
import { SocialsComponent } from './pages/socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectsComponent,
    LanguagesComponent,
    TechnologiesComponent,
    NavbarComponent,
    HeaderComponent,
    SocialComponent,
    ContactUsComponent,
    ProjectCardComponent,
    ServiceCardComponent,
    LanguageCardComponent,
    TechnologyCardComponent,
    ProjectsSectionComponent,
    ServicesSectionComponent,
    LanguagesSectionComponent,
    TechnologiesSectionComponent,
    FooterComponent,
    SectionsListComponent,
    SectionIconComponent,
    AboutSectionComponent,
    ProjectDetailsComponent,
    SocialsSectionComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2LoadingSpinnerModule.forRoot({}),
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
