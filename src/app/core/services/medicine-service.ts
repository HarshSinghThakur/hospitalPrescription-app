import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { GlobalConstant } from '../constants/GlobalConstant';
import { Observable } from 'rxjs';
import { MedicineModel } from '../models/classes/Medicine.Model';

@Service()
export class MedicineService {
 
    http = inject(HttpClient);

    getAllMedicine(): Observable<MedicineModel[]> {
        return this.http.get<MedicineModel[]>(environment.API_URL + GlobalConstant.API_METHOD.CREATE_MEDICINE)
    }

    createMedicine(request: MedicineModel): Observable<MedicineModel>{
        return this.http.post<MedicineModel>(environment.API_URL + GlobalConstant.API_METHOD.CREATE_MEDICINE, request);
    }

    editMedicine(request: MedicineModel): Observable<MedicineModel>{
        return this.http.post<MedicineModel>(environment.API_URL + GlobalConstant.API_METHOD.EDIT_MEDICINE + request.medicineId, request);
    }

    deleteMedicine(medicineId: any): Observable<any>{
        return this.http.delete(environment.API_URL + GlobalConstant.API_METHOD.DELETE_MEDICINE + medicineId);
    }

}
