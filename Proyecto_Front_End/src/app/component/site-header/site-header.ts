import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-site-header',
  imports: [
    RouterLink
  ],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css'
})

export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(anchor: string) {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}