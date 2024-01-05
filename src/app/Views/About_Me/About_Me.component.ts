import { Component } from '@angular/core';
import SVG_Icons from '../../../assets/SVG_Icons.json';

@Component ({
	selector: 'about-me-component',
	templateUrl: './About_Me.component.html',
	styleUrls: ['./About_Me.component.scss']
})

export class About_Me_Component
{
	Behance_Icon: string = SVG_Icons.Behance_Icon;
	Dribbble_Icon: string = SVG_Icons.Dribbble_Icon;
    Freelancer_Icon: string = SVG_Icons.Freelancer_Icon;
	GitHub_Icon: string = SVG_Icons.GitHub_Icon;
	Instagram_Icon: string = SVG_Icons.Instagram_Icon;
	LinkedIn_Icon: string = SVG_Icons.LinkedIn_Icon;
	Threads_Icon: string = SVG_Icons.Threads_Icon;
	X_Icon: string = SVG_Icons.X_Icon;
}