import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass']
})
export class IconComponent {
  iconsDesktop: any[] = [
    { name: 'Internet', path: '../../assets/icons_new/icon_internet.png' },
    { name: 'My Computer', path: '../../assets/icons_new/icon_computer.png' },
    { name: 'My Folder', path: '../../assets/icons_new/icon_folder.png' },
  ];
}
