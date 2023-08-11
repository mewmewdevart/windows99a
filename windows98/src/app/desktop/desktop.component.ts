import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.sass']
})
export class DesktopComponent {

  openHeaderWindow() {
    const headerWindow = document.querySelector('.window') as HTMLElement;
    headerWindow.style.display = 'block';
  }

  closingHeaderWindow() {
    const headerWindow = document.querySelector('.window') as HTMLElement;
    headerWindow.style.display = 'none';
  }
}
