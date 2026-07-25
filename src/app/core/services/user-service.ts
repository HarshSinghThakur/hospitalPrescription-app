import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { GlobalConstant } from '../constants/GlobalConstant';
import { LoginUserModel } from '../models/interfaces/User.Model';
import { UserModel } from '../models/classes/User.Model';

@Service()
export class UserService {

    http = inject(HttpClient);
    loggedinUserData!: LoginUserModel;

    constructor() {
        this.assignLoggedUser();
    }

    assignLoggedUser() {
        const loggedData = sessionStorage.getItem(GlobalConstant.LOGGED_USER_SESSION_KEY);
        if (loggedData) {
            this.loggedinUserData = JSON.parse(loggedData);
        }
    }
    onLogin(request: any): Observable<LoginUserModel> {
        return this.http.post<LoginUserModel>(environment.API_URL + GlobalConstant.API_METHOD.LOGIN, request)
    }

    createUser(userObject: UserModel): Observable<LoginUserModel> {
        return this.http.post<LoginUserModel>(environment.API_URL + GlobalConstant.API_METHOD.CREATE_USER, userObject);
    }

    getAllUsers(): Observable<LoginUserModel[]> {
        return this.http.get<LoginUserModel[]>(environment.API_URL + GlobalConstant.API_METHOD.CREATE_USER);
    }

    filterUsers(searchText: string): Observable<LoginUserModel[]> {
        return this.http.get<LoginUserModel[]>(environment.API_URL + GlobalConstant.API_METHOD.FILTER_USER + searchText);
    }
}
