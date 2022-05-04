You can display Accordion data from [dataSource](/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#dataSource) or [items](/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/items/) array. Note that each data source object must contain the **title** field whose value goes to the panel's title. If you want to customize the title, refer to the following section of this tutorial: [Customize Item Appearance](/Documentation/Guide/UI_Components/Accordion/Getting_Started_with_Accordion/#Customize_Item_Appearance).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#accordion").dxAccordion({
            dataSource: employees
        });
    });

    <!-- tab: index.html -->
    <head>
         <!-- ... -->
        <script type="text/javascript" src="data.js"></script>
    </head>

    <!-- tab: data.js -->
    const employees = [{
        ID: 1,
        Prefix: 'Mr.',
        FirstName: 'John',
        LastName: 'Heart',
        Position: 'CEO',
        State: 'California',
        BirthDate: '1964/03/16',
    },
    {
        ID: 2,
        Prefix: 'Mrs.',
        FirstName: 'Olivia',
        LastName: 'Peyton',
        Position: 'Sales Assistant',
        State: 'California',
        BirthDate: '1981/06/03',
    },
    {
        ID: 3,
        Prefix: 'Mr.',
        FirstName: 'Robert',
        LastName: 'Reagan',
        Position: 'CMO',
        State: 'Arkansas',
        BirthDate: '1974/09/07',
    },
    {
        ID: 4,
        Prefix: 'Ms.',
        FirstName: 'Greta',
        LastName: 'Sims',
        Position: 'HR Manager',
        State: 'Georgia',
        BirthDate: '1977/11/22',
    }];

##### Angular

    <!-- tab: app.component.html -->
    <dx-accordion
        [dataSource]="employees"
    >
    </dx-accordion>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Employee, Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service],
    })

    export class AppComponent {
        employees: Employee[];
        constructor(private service: Service) {
            this.employees = service.getEmployees();
        }
    }


    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Employee {
        ID: number | undefined;
        FirstName: string | undefined;
        LastName: string | undefined;
        Prefix: string | undefined;
        Position: string | undefined;
        BirthDate: string | undefined;
        State: string | undefined;
    }

    const employees: Employee[] = [{
        ID: 1,
        Prefix: 'Mr.',
        FirstName: 'John',
        LastName: 'Heart',
        Position: 'CEO',
        State: 'California',
        BirthDate: '1964/03/16',
    },
    {
        ID: 2,
        Prefix: 'Mrs.',
        FirstName: 'Olivia',
        LastName: 'Peyton',
        Position: 'Sales Assistant',
        State: 'California',
        BirthDate: '1981/06/03',
    },
    {
        ID: 3,
        Prefix: 'Mr.',
        FirstName: 'Robert',
        LastName: 'Reagan',
        Position: 'CMO',
        State: 'Arkansas',
        BirthDate: '1974/09/07',
    },
    {
        ID: 4,
        Prefix: 'Ms.',
        FirstName: 'Greta',
        LastName: 'Sims',
        Position: 'HR Manager',
        State: 'Georgia',
        BirthDate: '1977/11/22',
    }];

    @Injectable()
    export class Service {
        getEmployees() {
            return employees;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAccordion
            :data-source="employees"
        /> 
    </template>

    <script>
    // ...
    import { employees } from './data';

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                employees
            }
        }
    }
    </script>

    <!-- tab: data.js -->
    export const employees = [{
        ID: 1,
        Prefix: 'Mr.',
        FirstName: 'John',
        LastName: 'Heart',
        Position: 'CEO',
        State: 'California',
        BirthDate: '1964/03/16',
    },
    {
        ID: 2,
        Prefix: 'Mrs.',
        FirstName: 'Olivia',
        LastName: 'Peyton',
        Position: 'Sales Assistant',
        State: 'California',
        BirthDate: '1981/06/03',
    },
    {
        ID: 3,
        Prefix: 'Mr.',
        FirstName: 'Robert',
        LastName: 'Reagan',
        Position: 'CMO',
        State: 'Arkansas',
        BirthDate: '1974/09/07',
    },
    {
        ID: 4,
        Prefix: 'Ms.',
        FirstName: 'Greta',
        LastName: 'Sims',
        Position: 'HR Manager',
        State: 'Georgia',
        BirthDate: '1977/11/22',
    }];

##### React

    <!-- tab: App.js -->
    // ...
    import { employees } from './data';

    function App() {
        return (
            <Accordion
                dataSource={employees}
            />
        ); 
    }

    export default App;

    <!-- tab: data.js -->
    export const employees = [{
        ID: 1,
        Prefix: 'Mr.',
        FirstName: 'John',
        LastName: 'Heart',
        Position: 'CEO',
        State: 'California',
        BirthDate: '1964/03/16',
    },
    {
        ID: 2,
        Prefix: 'Mrs.',
        FirstName: 'Olivia',
        LastName: 'Peyton',
        Position: 'Sales Assistant',
        State: 'California',
        BirthDate: '1981/06/03',
    },
    {
        ID: 3,
        Prefix: 'Mr.',
        FirstName: 'Robert',
        LastName: 'Reagan',
        Position: 'CMO',
        State: 'Arkansas',
        BirthDate: '1974/09/07',
    },
    {
        ID: 4,
        Prefix: 'Ms.',
        FirstName: 'Greta',
        LastName: 'Sims',
        Position: 'HR Manager',
        State: 'Georgia',
        BirthDate: '1977/11/22',
    }];

--- 