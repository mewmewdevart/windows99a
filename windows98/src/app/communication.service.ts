import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private footerWindowStatusSubject = new Subject<boolean>();
  footerWindowStatus$ = this.footerWindowStatusSubject.asObservable();
  //public clickCount: number = 0;

  updateFooterWindowStatus(status: boolean) {
    this.footerWindowStatusSubject.next(status);
  }

  /* Option to export/import the clickCount of desktop to footer interactions
  setClickCount(count: number) {
    this.clickCount = count;
  }
  getClickCount(): number {
    return this.clickCount;
  } */
}
