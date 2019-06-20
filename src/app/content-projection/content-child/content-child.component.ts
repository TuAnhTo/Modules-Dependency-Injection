import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  template: `
    <p>
    Content Child Auth Service: {{authService.user}}
    </p>
  `,
  styles: []
})
export class ContentChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
