To create an Autocomplete component, declare it in the markup and bind the component to a data source.

Use one of the following properties to supply data to the component:

- [items](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/')             
Accepts a local data array.

- [dataSource](/api-reference/10%20UI%20Components/dxAutocomplete/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#dataSource')            
Accepts a local data array, [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') object, or DevExtreme data store.

If the data source contains objects, you should specify the [valueExpr](/api-reference/10%20UI%20Components/dxAutocomplete/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#valueExpr') property. It accepts the name of the data field that uniquely identifies each data object.

The code example below specifies the [dataSource](/api-reference/10%20UI%20Components/dxAutocomplete/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#dataSource') as an array and sets [valueExpr](/api-reference/10%20UI%20Components/dxAutocomplete/1%20Configuration/valueExpr.md 'Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#valueExpr') to `Subject`.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#autocomplete").dxAutocomplete({
            dataSource: employeesTasks,
            valueExpr: "Subject"
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
            <script type="text/javascript" src="data.js"></script>
        </head>
        <body>
            <div id="autocomplete"></div>
        </body>
    </html>

    <!-- tab: data.js -->
    const employeesTasks = [
        {
            ID: 1,
            Assignee: "Mr. John Heart",
            Subject: "Choose between PPO and HMO Health Plan",
            disabled: true
        }, {
            ID: 2,
            Assignee: "Mr. John Heart",
            Subject: "Google AdWords Strategy"
        }, {
            ID: 3,
            Assignee: "Mr. John Heart",
            Subject: "New Brochures"
        }, {
            ID: 4,
            Assignee: "Mr. John Heart",
            Subject: "Update NDA Agreement"
        }, {
            ID: 5,
            Assignee: "Mr. John Heart",
            Subject: "Review Product Recall Report by Engineering Team"
        }, {
            ID: 6,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Update Personnel Files"
        }, {
            ID: 7,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Review Health Insurance Options Under the Affordable Care Act"
        }, {
            ID: 8,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Non-Compete Agreements"
        }, {
            ID: 9,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Give Final Approval for Refunds"
        }, {
            ID: 10,
            Assignee: "Mr. Robert Reagan",
            Subject: "Deliver R&D Plans for 2013"
        }, {
            ID: 11,
            Assignee: "Mr. Robert Reagan",
            Subject: "Decide on Mobile Devices to Use in the Field"
        }, {
            ID: 12,
            Assignee: "Mr. Robert Reagan",
            Subject: "Try New Touch-Enabled WinForms Apps"
        }, {
            ID: 13,
            Assignee: "Mr. Robert Reagan",
            Subject: "Approval on Converting to New HDMI Specification"
        }, {
            ID: 14,
            Assignee: "Ms. Greta Sims",
            Subject: "Approve Hiring of John Jeffers"
        }, {
            ID: 15,
            Assignee: "Ms. Greta Sims",
            Subject: "Update Employee Files with New NDA"
        }, {
            ID: 16,
            Assignee: "Ms. Greta Sims",
            Subject: "Provide New Health Insurance Docs"
        }
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-autocomplete
        [dataSource]="employeesTasks"
        valueExpr="Subject"
    >
    </dx-autocomplete>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxAutocompleteModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxAutocompleteModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Service, Task } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service]
    })
    export class AppComponent {
        employeesTasks: Task[];
        constructor(service: Service) {
            this.employeesTasks = service.getTasks();
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Task {
        ID: number | undefined;
        Assignee: string | undefined;
        Subject: string | undefined;
        disabled?: boolean | undefined;
    }

    const employeesTasks: Task[] = [
        {
            ID: 1,
            Assignee: "Mr. John Heart",
            Subject: "Choose between PPO and HMO Health Plan",
            disabled: true
        }, {
            ID: 2,
            Assignee: "Mr. John Heart",
            Subject: "Google AdWords Strategy"
        }, {
            ID: 3,
            Assignee: "Mr. John Heart",
            Subject: "New Brochures"
        }, {
            ID: 4,
            Assignee: "Mr. John Heart",
            Subject: "Update NDA Agreement"
        }, {
            ID: 5,
            Assignee: "Mr. John Heart",
            Subject: "Review Product Recall Report by Engineering Team"
        }, {
            ID: 6,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Update Personnel Files"
        }, {
            ID: 7,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Review Health Insurance Options Under the Affordable Care Act"
        }, {
            ID: 8,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Non-Compete Agreements"
        }, {
            ID: 9,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Give Final Approval for Refunds"
        }, {
            ID: 10,
            Assignee: "Mr. Robert Reagan",
            Subject: "Deliver R&D Plans for 2013"
        }, {
            ID: 11,
            Assignee: "Mr. Robert Reagan",
            Subject: "Decide on Mobile Devices to Use in the Field"
        }, {
            ID: 12,
            Assignee: "Mr. Robert Reagan",
            Subject: "Try New Touch-Enabled WinForms Apps"
        }, {
            ID: 13,
            Assignee: "Mr. Robert Reagan",
            Subject: "Approval on Converting to New HDMI Specification"
        }, {
            ID: 14,
            Assignee: "Ms. Greta Sims",
            Subject: "Approve Hiring of John Jeffers"
        }, {
            ID: 15,
            Assignee: "Ms. Greta Sims",
            Subject: "Update Employee Files with New NDA"
        }, {
            ID: 16,
            Assignee: "Ms. Greta Sims",
            Subject: "Provide New Health Insurance Docs"
        }
    ];

    @Injectable()
    export class Service {
        getTasks(): Task[] {
            return employeesTasks;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAutocomplete 
            :data-source="employeesTasks"
            value-expr="Subject"
        />
     
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxAutocomplete } from 'devextreme-vue/autocomplete';
    import { employeesTasks } from './data.js';

    export default {
        components: {
            DxAutocomplete
        },
        data() {
            return {
                employeesTasks
            }
        }
    }
    </script>

    <!-- tab: data.js -->
    export const employeesTasks = [
        {
            ID: 1,
            Assignee: "Mr. John Heart",
            Subject: "Choose between PPO and HMO Health Plan",
            disabled: true
        }, {
            ID: 2,
            Assignee: "Mr. John Heart",
            Subject: "Google AdWords Strategy"
        }, {
            ID: 3,
            Assignee: "Mr. John Heart",
            Subject: "New Brochures"
        }, {
            ID: 4,
            Assignee: "Mr. John Heart",
            Subject: "Update NDA Agreement"
        }, {
            ID: 5,
            Assignee: "Mr. John Heart",
            Subject: "Review Product Recall Report by Engineering Team"
        }, {
            ID: 6,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Update Personnel Files"
        }, {
            ID: 7,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Review Health Insurance Options Under the Affordable Care Act"
        }, {
            ID: 8,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Non-Compete Agreements"
        }, {
            ID: 9,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Give Final Approval for Refunds"
        }, {
            ID: 10,
            Assignee: "Mr. Robert Reagan",
            Subject: "Deliver R&D Plans for 2013"
        }, {
            ID: 11,
            Assignee: "Mr. Robert Reagan",
            Subject: "Decide on Mobile Devices to Use in the Field"
        }, {
            ID: 12,
            Assignee: "Mr. Robert Reagan",
            Subject: "Try New Touch-Enabled WinForms Apps"
        }, {
            ID: 13,
            Assignee: "Mr. Robert Reagan",
            Subject: "Approval on Converting to New HDMI Specification"
        }, {
            ID: 14,
            Assignee: "Ms. Greta Sims",
            Subject: "Approve Hiring of John Jeffers"
        }, {
            ID: 15,
            Assignee: "Ms. Greta Sims",
            Subject: "Update Employee Files with New NDA"
        }, {
            ID: 16,
            Assignee: "Ms. Greta Sims",
            Subject: "Provide New Health Insurance Docs"
        }
    ];

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';
    import { employeesTasks } from './data';
    import { Autocomplete } from 'devextreme-react';

    function App() {
        return (
            <Autocomplete
                dataSource={employeesTasks}
                valueExpr="Subject"
            />
        );
    }

    export default App;

    <!-- tab: data.js -->
    export const employeesTasks = [
        {
            ID: 1,
            Assignee: "Mr. John Heart",
            Subject: "Choose between PPO and HMO Health Plan",
            disabled: true
        }, {
            ID: 2,
            Assignee: "Mr. John Heart",
            Subject: "Google AdWords Strategy"
        }, {
            ID: 3,
            Assignee: "Mr. John Heart",
            Subject: "New Brochures"
        }, {
            ID: 4,
            Assignee: "Mr. John Heart",
            Subject: "Update NDA Agreement"
        }, {
            ID: 5,
            Assignee: "Mr. John Heart",
            Subject: "Review Product Recall Report by Engineering Team"
        }, {
            ID: 6,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Update Personnel Files"
        }, {
            ID: 7,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Review Health Insurance Options Under the Affordable Care Act"
        }, {
            ID: 8,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Non-Compete Agreements"
        }, {
            ID: 9,
            Assignee: "Mrs. Olivia Peyton",
            Subject: "Give Final Approval for Refunds"
        }, {
            ID: 10,
            Assignee: "Mr. Robert Reagan",
            Subject: "Deliver R&D Plans for 2013"
        }, {
            ID: 11,
            Assignee: "Mr. Robert Reagan",
            Subject: "Decide on Mobile Devices to Use in the Field"
        }, {
            ID: 12,
            Assignee: "Mr. Robert Reagan",
            Subject: "Try New Touch-Enabled WinForms Apps"
        }, {
            ID: 13,
            Assignee: "Mr. Robert Reagan",
            Subject: "Approval on Converting to New HDMI Specification"
        }, {
            ID: 14,
            Assignee: "Ms. Greta Sims",
            Subject: "Approve Hiring of John Jeffers"
        }, {
            ID: 15,
            Assignee: "Ms. Greta Sims",
            Subject: "Update Employee Files with New NDA"
        }, {
            ID: 16,
            Assignee: "Ms. Greta Sims",
            Subject: "Provide New Health Insurance Docs"
        }
    ];

---
