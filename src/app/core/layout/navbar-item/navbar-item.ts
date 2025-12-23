import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-item.html',
  styleUrl: './navbar-item.css',
})
export class NavbarItem {
  readonly label = input.required<string>();
  readonly labelDesktop = input<string | null>();
  readonly route = input.required<string>();
}
