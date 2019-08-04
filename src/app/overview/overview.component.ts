import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BuyOrderInterfaceWithId } from '../shared/interfaces/buy-order.interface';
import { BuyorderService } from '../shared/services/buyorder.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AlertDialogComponent } from '../shared/dialogs/alert-dialog/alert-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  noData = true;
  dataSource: MatTableDataSource<BuyOrderInterfaceWithId> = new MatTableDataSource([]);
  displayedColumns = ['name', 'maxBidPrice', 'dataPackageType', 'action', 'delete'];

  constructor(private buyOrderService: BuyorderService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    // First call initialize to ensure that the table exists
    this.buyOrderService.intialize()
      .pipe(
        switchMap(initData => {
          return this.buyOrderService.getBuyOrders()
            .pipe(
              map(list => {
                console.log('list: ' + JSON.stringify(list));
                const data = list as BuyOrderInterfaceWithId[];
                if (data && data.length !== 0) {
                  this.noData = false;
                  this.dataSource = new MatTableDataSource(data);
                  console.log('data source ' + this.dataSource);
                  setTimeout(() => {
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                  }, 200);
                } else {
                  this.noData = true;
                }
              })
            );
        }))
      .subscribe(() => {
        this.subscribeToData();
        }, error => {
          console.log('error' + error);
        });

  }

  subscribeToData() {
    // Now subscribe to the observable
    this.buyOrderService.buyOrdersChanged
      .subscribe(buyOrders => {
        const data = buyOrders as BuyOrderInterfaceWithId[];
        if (data && data.length !== 0) {
          this.noData = false;
          this.dataSource = new MatTableDataSource(data);
          setTimeout(() => {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }, 200);
        } else {
          this.noData = true;
        }
      });
  }

  onAdd() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      panelClass: 'edit-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.buyOrderService.addBuyOrder(result)
          .subscribe(() => {
            this.noData = false;
            this.snackBar
              .open('', 'Success', {
                duration: 3000
              });
          }, error => {
              console.error(error);
          });
      }
    });
  }

  onEdit(row: BuyOrderInterfaceWithId) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: row,
      panelClass: 'edit-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result is ' + JSON.stringify(result));
      if (result) {
        this.buyOrderService.updateBuyOrder(result)
          .subscribe(() => {
            this.snackBar
              .open('', 'Success', {
                duration: 3000
              });
          }, error => {
            console.error(error);
          });
      }
    });

  }

  onDelete(row: BuyOrderInterfaceWithId) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        header: 'Delet Buy Order',
        cancelTooltip: 'Return to Overview',
        message: 'Delete this buy order?',
        buttons: ['yes', 'no']
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        console.log('User wants to delete ' + row.id);
        this.buyOrderService.deleteBuyOrder(row.id)
          .subscribe(() => {
            this.buyOrderService.sendCurrentData();
            }, error => {
                console.error(error);
            });
      }
    });
  }
}
