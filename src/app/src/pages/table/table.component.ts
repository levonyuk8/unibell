import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';


export interface PeriodicElement {
  id: number;
  name_sound: string;
  name_file: string;
  link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name_sound: 'INtellegent => Boom',
    name_file: 'INtellegent - Boom 28192kbps%29.mp3',
    link: 'https://cdn7.sefon.pro/prev/ClH68EGx20sfKYhGIppooA/1743817150/815/INtellegent%20-%20Boom%20%28192kbps%29.mp3'
  },
  {
    id: 2, name_sound: 'Shadowraze => Shout Out', name_file: 'He',
    link: 'https://cdn7.sefon.pro/prev/nYAyCcJCE7fw9Q5rRUd2Cg/1743817150/815/Shadowraze%20-%20Shout%20Out%20%28192kbps%29.mp3'
  },
  {
    id: 3,
    name_sound: 'RUD!N => Hang Out',
    name_file: 'Li',
    link: 'https://cdn7.sefon.pro/prev/VDc_1WuI9MLUh8uZ6LGUMQ/1743817150/815/RUD%21N%20-%20Hang%20Out%20%28192kbps%29.mp3'
  },
  {
    id: 4,
    name_sound: 'KASHIN & GRANDO => BENZ',
    name_file: 'Be',
    link: 'https://cdn1.sefon.pro/prev/P_DcaceMTa9rVCzifFWYcA/1743817150/815/KASHIN%20%26%20GRANDO%20-%20BENZ%20%28192kbps%29.mp3'
  },
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Output() soundLinkChange: EventEmitter<string> = new EventEmitter<string>()

  currentSelectedRowId!: number;
  displayedColumns: string[] = ['id', 'name_sound', 'name_file'];
  dataSource = ELEMENT_DATA;

  constructor(private cdr: ChangeDetectorRef) {
  }

  clickedRows(row: any) {
    this.currentSelectedRowId = this.currentSelectedRowId !== row.id ? row.id : null;
    this.soundLinkChange.emit(this.currentSelectedRowId ? row.link : null)
    this.cdr.detectChanges();

  }

}
