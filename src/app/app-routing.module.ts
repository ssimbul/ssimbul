import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { EducationComponent } from "./components/education/education.component";
import { ExpComponent } from "./components/exp/exp.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "edu", component: EducationComponent },
  { path: "exp", component: ExpComponent },
  { path: "proj", component: ProjectsComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  EducationComponent,
  ExpComponent,
  ProjectsComponent,
  ContactComponent
];
