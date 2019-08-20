import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HomeComponent } from "./components/home/home.component";

import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProjectsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
