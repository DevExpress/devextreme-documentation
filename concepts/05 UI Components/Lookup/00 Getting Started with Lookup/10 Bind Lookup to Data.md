Lookup can load data from different data source types. To use a local array, assign it to the [dataSource](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dataSource') property. If array elements are objects, specify the fields that supply Lookup's value ([valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#valueExpr')) and displayed value ([displayExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#displayExpr')). For information on other data source types, refer to the following articles:

- [Read-Only Data in JSON Format](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/20%20Read-Only%20Data%20in%20JSON%20Format.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/')
- [OData](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/')
- [Web API, PHP, MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/')
- [Custom Data Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#lookup").dxLookup({
            dataSource: new DevExpress.data.DataSource({ 
                store: employeesTasks, 
                key: "ID"
            }),
            valueExpr: "ID",
            displayExpr: "Subject"
        });
    });

    <!-- tab: index.html -->
    <head>
         <!-- ... -->
        <script type="text/javascript" src="data.js"></script>
    </head>

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
    <dx-lookup
        [dataSource]="dataSource"
        valueExpr="ID"
        displayExpr="Subject">
    </dx-lookup>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AppService, Task } from './app.service';
    import DataSource from 'devextreme/data/data_source';

    // ...
    export class AppComponent {
        employeesTasks: Task[];
        dataSource: DataSource;

        constructor(service: AppService) {
            this.employeesTasks = service.getTasks();
            this.dataSource = new DataSource({
                store: this.employeesTasks,
                key: "ID"
            });
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Task {
        ID: number;
        Assignee: string;
        Subject: string;
        disabled?: boolean;
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
    export class AppService {
        getTasks(): Task[] {
            return employeesTasks;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLookup
            :data-source="dataSource"
            value-expr="ID"
            display-expr="Subject"
        />
    </template>

    <script>
    // ...
    import DataSource from 'devextreme/data/data_source';
    import { employeesTasks } from './data';

    const dataSource = new DataSource({
        store: employeesTasks,
        key: "ID"
    });

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                dataSource
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
    // ...
    import DataSource from 'devextreme/data/data_source';
    import { employeesTasks } from './data';

    const dataSource = new DataSource({
        store: employeesTasks,
        key: "ID"
    });

    function App() {
        return (
            <Lookup
                dataSource={dataSource}
                valueExpr="ID"
                displayExpr="Subject"
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

[tags] data binding