import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DeliveryTypeComponent } from './delivery-type/delivery-type.component';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { ROLE } from 'src/app/shared/constants/role.constant';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('divClick') divClick!: ElementRef<HTMLElement>;
  public deliveryType: string = '';

  public loginAdminCheck!: boolean;
  public loginUserCheck!: boolean;
  public userNameLogin!: string;

  constructor(
    public dialog: MatDialog,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.checkDelivery();
    this.checkLogin();
    this.accountService.isUserLogin$.subscribe(() => {
      this.checkLogin();
    })
  }

  checkLogin(): boolean {
    if (localStorage.getItem('currentUser')) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
      if (currentUser && currentUser.role === ROLE.ADMIN) {
        return this.loginAdminCheck = true;
      } else if (currentUser && currentUser.role === ROLE.USER) {
        return this.loginUserCheck = true,
          this.userNameLogin = currentUser.firstName;
      }
    }
    return this.loginAdminCheck = false,
      this.loginUserCheck = false;
  }



  checkDelivery(): void {
    let local = localStorage.getItem('deliveryType');

    if (local === 'true') {
      this.deliveryType = 'delivery by courier'
      return
    } else if (local === 'false') {
      this.deliveryType = 'self-pickup'
      return
    }
    this.triggerFalseClick();
  }
  triggerFalseClick(): void {
    setTimeout(() => {
      this.divClick.nativeElement.click();
    }, 200);
  }

  openDialogData(): void {
    this.dialog.open(DialogDataComponent, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      autoFocus: false
    });
  }
  openSideMenu(): void {
    this.dialog.open(SideMenuComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'side-dialog',
      autoFocus: false,
      position: {
        top: '0px',
        right: '0px'
      }
    });
  }
  openDeliveryType(): void {
    this.dialog.open(DeliveryTypeComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'side-dialog',
      autoFocus: false,
    }).afterClosed().subscribe(result => {
      localStorage.setItem('deliveryType', result);
      this.checkDeliveryType(result);
    });
  }
  openLoginDialog(): void {
    this.closeDialog();
    this.dialog.open(AuthDialogComponent, {
      backdropClass: 'dialog-backLogin',
      panelClass: 'auth-dialogLogin',
      autoFocus: false
    })
  }
  checkDeliveryType(result: boolean): string {
    if (result) {
      return this.deliveryType = 'delivery by courier'
    }
    return this.deliveryType = 'self-pickup'
  }
  closeDialog(): void {
    this.dialog.closeAll();
  }
}
