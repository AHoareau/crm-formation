import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from '../../interfaces/nav-link';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.scss']
})
export class NavVerticalComponent implements OnInit {

  @Input() items: NavLink[];

  constructor() { }

  ngOnInit(): void {
  }

}
