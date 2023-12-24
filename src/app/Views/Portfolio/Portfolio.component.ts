import { Component } from '@angular/core';
import SVG_Images from 'src/assets/SVG_Images.json';

@Component ({
	selector: 'portfolio-component',
	templateUrl: './Portfolio.component.html',
	styleUrls: ['./Portfolio.component.scss']
})

export class Portfolio_Component
{
    al_waseet_Logo: string = SVG_Images.al_waseet_Logo;
	Sandwitches_Logo: string = SVG_Images.Sandwitches_Logo;
}