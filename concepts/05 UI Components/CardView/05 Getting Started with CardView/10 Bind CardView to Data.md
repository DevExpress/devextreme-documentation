The CardView component can load and update data from different data source types. To use a local array, assign it to the [dataSource](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#dataSource') property and specify the key field in the [keyExpr](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#keyExpr') property:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#card-view").dxCardView({
            dataSource: employees,
            keyExpr: "ID",
        });
    });

    <!-- tab: data.js -->
    const employees = [
        {
            ID: 1,
            FullName: "John Heart",
            Position: "CEO",
            Picture: "images/employees/01.png",
            Department: "Management",
            Phone: "+1 (213) 555-9392",
            Email: "jheart@dx-email.com"
        },
        {
            ID: 2,
            FullName: "Samantha Bright",
            Position: "COO",
            Picture: "images/employees/30.png",
            Department: "Management",
            Phone: "+1 (213) 555-2858",
            Email: "samanthab@dx-email.com"
        },
        {
            ID: 3,
            FullName: "Arthur Miller",
            Position: "CTO",
            Picture: "images/employees/10.png",
            Department: "Management",
            Phone: "+1 (310) 555-8583",
            Email: "arthurm@dx-email.com"
        },
        {
            ID: 4,
            FullName: "Robert Reagan",
            Position: "CMO",
            Picture: "images/employees/03.png",
            Department: "Management",
            Phone: "+1 (818) 555-2387",
            Email: "robertr@dx-email.com"
        },
        {
            ID: 5,
            FullName: "Greta Sims",
            Position: "HR Manager",
            Picture: "images/employees/04.png",
            Department: "Human Resources",
            Phone: "+1 (818) 555-6546",
            Email: "gretas@dx-email.com"
        },
        {
            ID: 6,
            FullName: "Brett Wade",
            Position: "IT Manager",
            Picture: "images/employees/05.png",
            Department: "IT",
            Phone: "+1 (626) 555-0358",
            Email: "brettw@dx-email.com"
        },
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view
        [dataSource]="employees"
        keyExpr="ID">
    </dx-card-view>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Employee, EmployeesService } from './employees.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        employees: Employee[] = [];

        constructor(service: EmployeesService) {
            this.employees = service.getEmployees();
        }
    }

    <!-- tab: employees.service.ts -->
    import { Injectable } from '@angular/core';

    export interface Employee {
        ID: number;
        FullName: string;
        Position: string;
        Picture: string;
        Department: string;
        Phone: string;
        Email: string;
    }

    const employees: Employee[] = [
        {
            ID: 1,
            FullName: 'John Heart',
            Position: 'CEO',
            Picture: 'images/employees/01.png',
            Department: 'Management',
            Phone: '+1 (213) 555-9392',
            Email: 'jheart@dx-email.com',
        },
        {
            ID: 2,
            FullName: 'Samantha Bright',
            Position: 'COO',
            Picture: 'images/employees/30.png',
            Department: 'Management',
            Phone: '+1 (213) 555-2858',
            Email: 'samanthab@dx-email.com',
        },
        {
            ID: 3,
            FullName: 'Arthur Miller',
            Position: 'CTO',
            Picture: 'images/employees/10.png',
            Department: 'Management',
            Phone: '+1 (310) 555-8583',
            Email: 'arthurm@dx-email.com',
        },
        {
            ID: 4,
            FullName: 'Robert Reagan',
            Position: 'CMO',
            Picture: 'images/employees/03.png',
            Department: 'Management',
            Phone: '+1 (818) 555-2387',
            Email: 'robertr@dx-email.com',
        },
        {
            ID: 5,
            FullName: 'Greta Sims',
            Position: 'HR Manager',
            Picture: 'images/employees/04.png',
            Department: 'Human Resources',
            Phone: '+1 (818) 555-6546',
            Email: 'gretas@dx-email.com',
        },
        {
            ID: 6,
            FullName: 'Brett Wade',
            Position: 'IT Manager',
            Picture: 'images/employees/05.png',
            Department: 'IT',
            Phone: '+1 (626) 555-0358',
            Email: 'brettw@dx-email.com',
        },
    ];

    @Injectable({
        providedIn: 'root'
    })
    export class EmployeesService {
        getEmployees(): Employee[] {
            return employees;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView
            :data-source="employees"
            key-expr="ID">
        </DxCardView>
    </template>

    <script setup lang="ts">
    // ...
    import { employees } from './data.ts';
    </script>

    <!-- tab: data.ts -->
    const employees = [
        {
            ID: 1,
            FullName: "John Heart",
            Position: "CEO",
            Picture: "images/employees/01.png",
            Department: "Management",
            Phone: "+1 (213) 555-9392",
            Email: "jheart@dx-email.com"
        },
        {
            ID: 2,
            FullName: "Samantha Bright",
            Position: "COO",
            Picture: "images/employees/30.png",
            Department: "Management",
            Phone: "+1 (213) 555-2858",
            Email: "samanthab@dx-email.com"
        },
        {
            ID: 3,
            FullName: "Arthur Miller",
            Position: "CTO",
            Picture: "images/employees/10.png",
            Department: "Management",
            Phone: "+1 (310) 555-8583",
            Email: "arthurm@dx-email.com"
        },
        {
            ID: 4,
            FullName: "Robert Reagan",
            Position: "CMO",
            Picture: "images/employees/03.png",
            Department: "Management",
            Phone: "+1 (818) 555-2387",
            Email: "robertr@dx-email.com"
        },
        {
            ID: 5,
            FullName: "Greta Sims",
            Position: "HR Manager",
            Picture: "images/employees/04.png",
            Department: "Human Resources",
            Phone: "+1 (818) 555-6546",
            Email: "gretas@dx-email.com"
        },
        {
            ID: 6,
            FullName: "Brett Wade",
            Position: "IT Manager",
            Picture: "images/employees/05.png",
            Department: "IT",
            Phone: "+1 (626) 555-0358",
            Email: "brettw@dx-email.com"
        },
    ];

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import CardView from 'devextreme-react/card-view';
    import { employees } from './data.ts';

    function App() {
        return (
            <CardView
                dataSource={employees}
                keyExpr="ID">
            </CardView>
        );
    }

    export default App;

    <!-- tab: data.ts -->
    const employees = [
        {
            ID: 1,
            FullName: "John Heart",
            Position: "CEO",
            Picture: "images/employees/01.png",
            Department: "Management",
            Phone: "+1 (213) 555-9392",
            Email: "jheart@dx-email.com"
        },
        {
            ID: 2,
            FullName: "Samantha Bright",
            Position: "COO",
            Picture: "images/employees/30.png",
            Department: "Management",
            Phone: "+1 (213) 555-2858",
            Email: "samanthab@dx-email.com"
        },
        {
            ID: 3,
            FullName: "Arthur Miller",
            Position: "CTO",
            Picture: "images/employees/10.png",
            Department: "Management",
            Phone: "+1 (310) 555-8583",
            Email: "arthurm@dx-email.com"
        },
        {
            ID: 4,
            FullName: "Robert Reagan",
            Position: "CMO",
            Picture: "images/employees/03.png",
            Department: "Management",
            Phone: "+1 (818) 555-2387",
            Email: "robertr@dx-email.com"
        },
        {
            ID: 5,
            FullName: "Greta Sims",
            Position: "HR Manager",
            Picture: "images/employees/04.png",
            Department: "Human Resources",
            Phone: "+1 (818) 555-6546",
            Email: "gretas@dx-email.com"
        },
        {
            ID: 6,
            FullName: "Brett Wade",
            Position: "IT Manager",
            Picture: "images/employees/05.png",
            Department: "IT",
            Phone: "+1 (626) 555-0358",
            Email: "brettw@dx-email.com"
        },
    ];

---