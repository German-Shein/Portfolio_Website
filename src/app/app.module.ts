import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header_Component } from './Header/Header.component';
import { About_Me_Component } from './Views/About_Me/About_Me.component';

@NgModule ({
	declarations: [AppComponent, Header_Component, About_Me_Component],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule
{

}