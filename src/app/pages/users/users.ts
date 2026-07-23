import { Component, ChangeDetectionStrategy, inject, WritableSignal, signal, OnInit, viewChild, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user-service';
import { LoginUserModel } from '../../core/models/interfaces/User.Model';

@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule],
  templateUrl: './users.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  isFormOpen: boolean = false;
  userForm!: FormGroup;
  userList: WritableSignal<LoginUserModel[]> = signal<LoginUserModel[]>([]);
  userService = inject(UserService);

  @ViewChild('searchTemplate') searchDropdown!: ElementRef;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      mobileNo: [''],
      password: [''],
      roleName: [''],
      isActive: [false],
    })
  }

  toggleFormVisibility() {
    this.isFormOpen = !this.isFormOpen;
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res: LoginUserModel[]) => {
        this.userList.set(res);
      }
    })
  }

  onSaveUser() {
    const formValue = this.userForm.value;
    this.userService.createUser(formValue).subscribe({
      next: (res: LoginUserModel) => {
        this.getAllUsers();
      }
    })
  }

  onSearch() {
    const selectedRole = this.searchDropdown.nativeElement.value;
    this.userService.filterUsers(selectedRole).subscribe({
      next: (res: LoginUserModel[]) => {
        this.userList.set(res);
      }
    })
  }

  onReset() {
    this.searchDropdown.nativeElement.value = '';
    this.getAllUsers();
  }
}
