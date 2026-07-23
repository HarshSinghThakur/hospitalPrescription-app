import { Component, inject, isWritableSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../core/services/patient-service';
import { IPatientModel } from '../../core/models/interfaces/IPatientModel';
import { VisitService } from '../../core/services/visit-service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-open-patients',
  imports: [],
  templateUrl: './open-patients.html',
  styleUrl: './open-patients.scss',
})
export class OpenPatients implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  patientService = inject(PatientService);
  visitService = inject(VisitService);

  patientDetails: WritableSignal<IPatientModel> = signal({
    patientId: 0,
    fullName: "",
    gender: "",
    dateOfBirth: new Date(),
    phone: "",
    address: "",
    createdDate: new Date(),
  })
  currentPatientId: number = 0;
  visitList: WritableSignal<any> = signal([]);
  newPrescription!: FormGroup<any>;

  initializeForm() {
    this.newPrescription = new FormGroup({
      visitId: new FormControl(""),
      medicineId: new FormControl(""),
      dosage: new FormControl(""),
      frequency: new FormControl(""),
      durationDays: new FormControl(""),
      instructions: new FormControl(""),
    })
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        this.currentPatientId = res.patientId;

        this.getPatientById(this.currentPatientId);
      }
    });
  }

  getPatientById(currentPatientId: number) {
    this.patientService.getPatientbyId(currentPatientId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.patientDetails.set(res);
        this.getVisitsPatientbyId(currentPatientId);
      }
    });
  }

  getVisitsPatientbyId(currentPatientId: number) {
    this.visitService.getVisitsPatientbyId(currentPatientId).subscribe({
      next: (res: any) => {
        this.visitList.set(res);
      }
    })
  }

}
