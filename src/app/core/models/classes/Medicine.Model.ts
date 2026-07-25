export class MedicineModel {
    medicineId?: number;
    name: string;
    strength: string;
    form: string;

    constructor() {
        this.medicineId = 0;
        this.name = "";
        this.strength = "";
        this.form = "";
    }
}