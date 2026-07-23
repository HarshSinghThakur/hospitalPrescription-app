import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Service()
export class VisitService {
  
    http = inject(HttpClient);
      getVisitsPatientbyId(request: any): Observable<any> {
          return this.http.get(environment.API_URL+`visits/patient/${request}`)
      }
}
