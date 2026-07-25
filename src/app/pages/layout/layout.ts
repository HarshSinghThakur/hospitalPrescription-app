import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginUserModel } from '../../core/models/interfaces/User.Model';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NgClass, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit{
  userService = inject(UserService);
  router = inject(Router);
  
  isSidebarExpanded: boolean = true;
  loggedinUserData!: LoginUserModel;

  
  ngOnInit(): void {
    this.loggedinUserData = this.userService.loggedinUserData;
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}
