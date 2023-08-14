import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { WindowComponent } from './window/window.component';
import { StartMenuComponent } from './start-menu/start-menu.component';

const routes: Routes = [
  { path: '', component: DesktopComponent }, // Route main
  { path: 'window', component: WindowComponent },
  { path: 'start-menu', component: StartMenuComponent} // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
