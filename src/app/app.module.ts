import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SectionsComponent } from './components/sections/sections.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionDetailsComponent } from './components/section-details/section-details.component';
import { SectionDetailsToolbarComponent } from './components/section-details-toolbar/section-details-toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './components/tabs/tabs.component';
import { ModalComponent } from './components/modal/modal.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SectionsComponent,
    SectionDetailsComponent,
    SectionDetailsToolbarComponent,
    TabsComponent,
    ModalComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
