import { Component, ChangeDetectionStrategy, signal, inject, WritableSignal, OnInit } from '@angular/core';
import { form, FormField, minLength, required, schema } from '@angular/forms/signals';
import { GlobalConstant } from '../../core/constants/GlobalConstant';
import { MedicineService } from '../../core/services/medicine-service';
import { MedicineModel } from '../../core/models/classes/Medicine.Model';

@Component({
  selector: 'app-medicines-master',
  imports: [FormField],
  templateUrl: './medicines-master.html',
  styleUrl: './medicines-master.scss',
})
export class MedicinesMaster implements OnInit {

  medicineService = inject(MedicineService);

  medicineList: WritableSignal<MedicineModel[]> = signal([]);
  medicineFormList: string[] = GlobalConstant.MEDICINE_FORM_LIST;
  isFormOpen: boolean = false;

  medicineformModel = signal({
    "name": "",
    "strength": "",
    "form": ""
  });

  medicineForm = form(this.medicineformModel, (schema) => {
    required(schema.name, { message: "This is required" }),
      required(schema.form, { message: 'This is required' }),
      required(schema.strength, { message: 'This is required' }),
      minLength(schema.name, 3, { message: 'Min 3 character needed' })
  });

  ngOnInit(): void {
    this.getAllMedicine();
  }

  toggleFormVisibility() {
    this.isFormOpen = !this.isFormOpen;
  }

  getAllMedicine() {
    this.medicineService.getAllMedicine().subscribe({
      next: (res: MedicineModel[]) => {
        this.medicineList.set(res);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  onSaveMedicine() {
    debugger;
    const formValue = this.medicineForm().value();
    this.medicineService.createMedicine(formValue).subscribe({
      next: (res: MedicineModel) => {
        this.getAllMedicine();
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  editMedicine(medicine: MedicineModel) {
    this.medicineformModel.set({
      name: medicine.name,
      strength: medicine.strength,
      form: medicine.form,
    })
  }

  deleteMedicine(medicine: MedicineModel) {
    this.medicineService.deleteMedicine(medicine.medicineId).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getAllMedicine();
      }
    })
  }

}
