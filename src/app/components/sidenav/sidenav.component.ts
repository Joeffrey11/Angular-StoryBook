import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  userPosition!: string;
  userPositionSubscription!: Subscription;
  constructor(
    private userPositionService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userPositionSubscription =
      this.userPositionService.userPosition.subscribe((data) => {
        this.userPosition = data;
      });
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    this.userPositionSubscription.unsubscribe();
  }
}
