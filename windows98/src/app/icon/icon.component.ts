import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.sass']
})
export class IconComponent {
	constructor(private communicationService: CommunicationService) {}

	onToggleWindowClick() {
		this.communicationService.toggleWindow();
	}
}
