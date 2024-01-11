import { About_Me_Component } from './Views/About_Me/About_Me.component';
import { Blogs_Component } from './Views/Blogs/Blogs.component';
import { NgModule } from '@angular/core';
import { Portfolio_Component } from './Views/Portfolio/Portfolio.component';
import { Resume_Component } from './Views/Resume/Resume.component';
import { RouterModule, Routes } from '@angular/router';

const Website_Routes: Routes = [{path: '', component: About_Me_Component}, {path: 'blogs', component: Blogs_Component}, {path: 'portfolio', component: Portfolio_Component}, {path: 'cv', component: Resume_Component}];

@NgModule ({imports: [RouterModule.forRoot (Website_Routes)], exports: [RouterModule]})

export class AppRoutingModule
{

}