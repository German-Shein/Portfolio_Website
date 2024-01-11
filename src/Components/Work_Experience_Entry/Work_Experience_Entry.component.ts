import { Component, Input } from '@angular/core';

interface Key_Skill_and_Contribution_Schema
{
    Contribution: string;
    Skill: string;
}

@Component ({
	selector: 'work-experience-entry-component',
	templateUrl: './Work_Experience_Entry.component.html',
	styleUrls: ['./Work_Experience_Entry.component.scss']
})

export class Work_Experience_Entry_Component
{
	@Input () Company: string = '';
    @Input () Company_Description: string = '';
    @Input () Company_URI: string = '';
    @Input () Contribution: string = '';
    @Input () End_Date: string = '';
    @Input () Key_Skills_and_Contributions: Key_Skill_and_Contribution_Schema [] = [];
    @Input () Location: string = '';
    @Input () Position: string = '';
    @Input () Start_Date: string = '';
}