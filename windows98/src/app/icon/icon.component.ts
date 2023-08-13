import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.sass']
})
export class IconComponent {
	//windowVisible: boolean = false;
	//buttonDisabled: boolean = false;

	constructor(private communicationService: CommunicationService) {}

	onToggleWindowClick() {
		//this.windowVisible = !this.windowVisible; // If the window is visible, disabled the button
		//this.buttonDisabled = this.windowVisible;
		this.communicationService.toggleWindow();
	}
}
