// desktop.component.ts
import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.sass']
})
export class DesktopComponent {
  headerWindowVisible = false;

  constructor(private communicationService: CommunicationService) {}

  // 🚨 MAKE IT BETTER: 
  toggleHideWindow(){
    const headerWindow = document.querySelector('.window') as HTMLElement;
    headerWindow.style.display = 'none';
  }

  toggleHeaderWindow(){
    this.headerWindowVisible = !this.headerWindowVisible;
    this.communicationService.updateFooterWindowStatus(this.headerWindowVisible);
  }
}
