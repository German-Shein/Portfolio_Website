import { Component } from '@angular/core';
import SVG_Icons from '../../../assets/SVG_Icons.json';

@Component ({
	selector: 'about-me-component',
	templateUrl: './About_Me.component.html',
	styleUrls: ['./About_Me.component.scss']
})

export class About_Me_Component
{
    Freelancer_Icon: string = SVG_Icons.Freelancer_Icon;
	GitHub_Icon: string = SVG_Icons.GitHub_Icon;
	Instagram_Icon: string = SVG_Icons.Instagram_Icon;
	LinkedIn_Icon: string = SVG_Icons.LinkedIn_Icon;
}