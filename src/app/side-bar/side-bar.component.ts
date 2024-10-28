import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatList,
    MatListItem
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
