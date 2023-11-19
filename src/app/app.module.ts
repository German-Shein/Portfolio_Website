import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header_Component } from './Header/Header.component';
import { About_Me_Component } from './Views/About_Me/About_Me.component';
import { Freelancer_Icon_Component } from './Icons/Freelancer_Icon/Freelancer_Icon.component';
import { GitHub_Icon_Component } from './Icons/GitHub_Icon/GitHub_Icon.component';
import { Instagram_Icon_Component } from './Icons/Instagram_Icon/Instagram_Icon.component';
import { LinkedIn_Icon_Component } from './Icons/LinkedIn_Icon/LinkedIn_Icon.component';
import { Top_Corner_Ornament_Component } from './Ornaments/Top_Corner/Top_Corner.component';
import { Crown_Ornament_Component } from './Ornaments/Crown/Crown.component';
import { Bottom_Corner_Ornament_Component } from './Ornaments/Bottom_Corner/Bottom_Corner.component';
import { Footer_Component } from './Footer/Footer.component';
import { Resume_Component } from './Views/Resume/Resume.component';
import { Portfolio_Component } from './Views/Portfolio/Portfolio.component';
import { SVG_Element_Component } from 'src/Components/SVG_Element/SVG_Element.component';

@NgModule ({
	declarations: [AppComponent, Header_Component, About_Me_Component, Freelancer_Icon_Component, GitHub_Icon_Component, Instagram_Icon_Component, LinkedIn_Icon_Component, Top_Corner_Ornament_Component, Crown_Ornament_Component, Bottom_Corner_Ornament_Component, Footer_Component, Resume_Component, Portfolio_Component, SVG_Element_Component],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule
{

}