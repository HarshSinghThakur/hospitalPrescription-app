import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { UserService } from '../../core/services/user-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../core/models/classes/User.Model';
import { GlobalConstant } from '../../core/constants/GlobalConstant';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login.scss',
})
export class Login {

  userService = inject(UserService);
  router = inject(Router);

  loginObj : LoginModel = new LoginModel();

  login() {
    this.userService.onLogin(this.loginObj).subscribe({
      next: (res:any) => {        
        sessionStorage.setItem(GlobalConstant.LOGGED_USER_SESSION_KEY, JSON.stringify(res));
        this.userService.assignLoggedUser();
        this.router.navigateByUrl('/admin/users');
      },
      error : (err) =>{
        console.log(err);
        alert(err.error)
      }
    })
  }
}
