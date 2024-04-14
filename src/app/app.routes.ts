import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { AboutusComponent } from './public/aboutus/aboutus.component';
import { ContactusComponent } from './public/contactus/contactus.component';
import { TeamComponent } from './public/team/team.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "aboutus", component: AboutusComponent},
    {path: "contactus", component: ContactusComponent},
    {path: "team", component: TeamComponent}
];
