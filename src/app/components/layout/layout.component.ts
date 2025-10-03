import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div
      class="w-full max-w-5xl min-h-screen mx-auto flex flex-col pb-8 pt-20 sm:pt-24 relative px-2 sm:px-4"
    >
      <app-header />
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class LayoutComponent {}
