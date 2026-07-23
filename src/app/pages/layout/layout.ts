import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginUserModel } from '../../core/models/interfaces/User.Model';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NgClass],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit{
  isSidebarExpanded: boolean = true;
  loggedinUserData: LoginUserModel = {
    id: 0,
    email: '',
    fullName:'',
    mobileNo:'',
    roleId: 0,
    roleName: '',
    isActive: false,
  };

  router = inject(Router);
  
  ngOnInit(): void {
    const loggedData = sessionStorage.getItem('userData');
    if(loggedData) {
      this.loggedinUserData = JSON.parse(loggedData);
    }
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}
