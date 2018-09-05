import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApisearchComponent } from '../../pages/apisearch/apisearch.component';


@Component({
  selector: 'app-sideprojects',
  templateUrl: './sideprojects.component.html',
  styleUrls: ['./sideprojects.component.css']
})
export class SideprojectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ApisearchComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
