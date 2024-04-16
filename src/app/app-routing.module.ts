import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { AboutusComponent } from './public/aboutus/aboutus.component';
import { ContactusComponent } from './public/contactus/contactus.component';
import { TeamComponent } from './public/team/team.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "aboutus", component: AboutusComponent},
    {path: "contactus", component: ContactusComponent},
    {path: "team", component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
