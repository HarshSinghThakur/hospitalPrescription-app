import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Users } from './pages/users/users';
import { MedicinesMaster } from './pages/medicines-master/medicines-master';
import { OpenPatients } from './pages/open-patients/open-patients';

export const routes: Routes = [
    {
        path: '',
        component: Login,
        pathMatch: 'full'
    },
    { 
        path: 'login', 
        component: Login 
    },
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'users',
                component: Users
            },
            {
                path: "medicine-master",
                component: MedicinesMaster
            },
            {
                path: "open-patient/:patientId",
                component: OpenPatients
            }
        ]
    },
];
