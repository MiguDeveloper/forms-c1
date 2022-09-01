import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, mapTo, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private titleSubject: Subject<string> = new Subject();
  public title$: Observable<string> = this.titleSubject.asObservable();

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.init();
  }

  init() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        mapTo(this.activatedRouter),
        switchMap((route: any) => route.firstChild?.data),
        tap((data) => console.log('data: ', data)),
        map((data: any) => data.title)
      )
      .subscribe((title) => this.titleSubject.next(title));
  }
}
