import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-record-player',
  templateUrl: './record-player.component.html',
  styleUrls: ['./record-player.component.css']
})
export class RecordPlayerComponent {

  @Input() sound!: string;
}
