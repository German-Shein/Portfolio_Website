import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header_Component } from '../Components/Header/Header.component';
import { About_Me_Component } from './Views/About_Me/About_Me.component';
import { Top_Corner_Ornament_Component } from '../Ornaments/Top_Corner/Top_Corner.component';
import { Crown_Ornament_Component } from '../Ornaments/Crown/Crown.component';
import { Bottom_Corner_Ornament_Component } from '../Ornaments/Bottom_Corner/Bottom_Corner.component';
import { Footer_Component } from '../Components/Footer/Footer.component';
import { Resume_Component } from './Views/Resume/Resume.component';
import { Portfolio_Component } from './Views/Portfolio/Portfolio.component';
import { SVG_Element_Component } from 'src/Components/SVG_Element/SVG_Element.component';
import { Link_Component } from 'src/Components/Link/Link.component';
import { Divider_Component } from 'src/Ornaments/Divider/Divider.component';
import { Tag_Component } from 'src/Components/Tag/Tag.component';

@NgModule ({
	declarations: [AppComponent, Header_Component, About_Me_Component, Top_Corner_Ornament_Component, Crown_Ornament_Component, Bottom_Corner_Ornament_Component, Footer_Component, Link_Component, Resume_Component, Portfolio_Component, SVG_Element_Component, Divider_Component, Link_Component, Tag_Component],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule
{

}