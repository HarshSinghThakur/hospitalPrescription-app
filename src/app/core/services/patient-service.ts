import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Service()
export class PatientService {

    http = inject(HttpClient);

    getPatientbyId(request: any): Observable<any> {
        return this.http.get(environment.API_URL+`patients/${request}`)
    }

    getVisitsPatientbyId(request: any): Observable<any> {
        return this.http.get(environment.API_URL+`visit/patient/${request}`)
    }
  
}
