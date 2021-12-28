#include tutorials-editors-data-binding 

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
        // ...
        <script type="text/javascript" src="data.js"></script>
    </head>

    <!-- tab: data.js -->
    const employeesTasks = [
        {
            ID: 1,
            Assigned: "Mr. John Heart",
            Subject: "Choose between PPO and HMO Health Plan",
            disabled: true
        }, {
            ID: 2,
            Assigned: "Mr. John Heart",
            Subject: "Google AdWords Strategy",
            visible: false
        }, {
            ID: 3,
            Assigned: "Mr. John Heart",
            Subject: "New Brochures"
        }, {
            ID: 4,
            Assigned: "Mr. John Heart",
            Subject: "Update NDA Agreement"
        }, {
            ID: 5,
            Assigned: "Mr. John Heart",
            Subject: "Review Product Recall Report by Engineering Team"
        }, {
            ID: 6,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Update Personnel Files"
        }, {
            ID: 7,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Review Health Insurance Options Under the Affordable Care Act"
        }, {
            ID: 8,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Non-Compete Agreements"
        }, {
            ID: 9,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Give Final Approval for Refunds"
        }, {
            ID: 10,
            Assigned: "Mr. Robert Reagan",
            Subject: "Deliver R&D Plans for 2013"
        }, {
            ID: 11,
            Assigned: "Mr. Robert Reagan",
            Subject: "Decide on Mobile Devices to Use in the Field"
        }, {
            ID: 12,
            Assigned: "Mr. Robert Reagan",
            Subject: "Try New Touch-Enabled WinForms Apps"
        }, {
            ID: 13,
            Assigned: "Mr. Robert Reagan",
            Subject: "Approval on Converting to New HDMI Specification"
        }, {
            ID: 14,
            Assigned: "Ms. Greta Sims",
            Subject: "Approve Hiring of John Jeffers"
        }, {
            ID: 15,
            Assigned: "Ms. Greta Sims",
            Subject: "Update Employee Files with New NDA"
        }, {
            ID: 16,
            Assigned: "Ms. Greta Sims",
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
        Assigned: string;
        Subject: string;
        disabled?: boolean;
        visible?: boolean;
    }
    
    const employeesTasks: Task[] = [
        {
                ID: 1,
            Assigned: "Mr. John Heart",
            Subject: "Choose between PPO and HMO Health Plan",
            disabled: true
        }, {
            ID: 2,
            Assigned: "Mr. John Heart",
            Subject: "Google AdWords Strategy",
            visible: false
        }, {
            ID: 3,
            Assigned: "Mr. John Heart",
            Subject: "New Brochures"
        }, {
            ID: 4,
            Assigned: "Mr. John Heart",
            Subject: "Update NDA Agreement"
        }, {
            ID: 5,
            Assigned: "Mr. John Heart",
            Subject: "Review Product Recall Report by Engineering Team"
        }, {
            ID: 6,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Update Personnel Files"
        }, {
            ID: 7,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Review Health Insurance Options Under the Affordable Care Act"
        }, {
            ID: 8,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Non-Compete Agreements"
        }, {
            ID: 9,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Give Final Approval for Refunds"
        }, {
            ID: 10,
            Assigned: "Mr. Robert Reagan",
            Subject: "Deliver R&D Plans for 2013"
        }, {
            ID: 11,
            Assigned: "Mr. Robert Reagan",
            Subject: "Decide on Mobile Devices to Use in the Field"
        }, {
            ID: 12,
            Assigned: "Mr. Robert Reagan",
            Subject: "Try New Touch-Enabled WinForms Apps"
        }, {
            ID: 13,
            Assigned: "Mr. Robert Reagan",
            Subject: "Approval on Converting to New HDMI Specification"
        }, {
            ID: 14,
            Assigned: "Ms. Greta Sims",
            Subject: "Approve Hiring of John Jeffers"
        }, {
            ID: 15,
            Assigned: "Ms. Greta Sims",
            Subject: "Update Employee Files with New NDA"
        }, {
            ID: 16,
            Assigned: "Ms. Greta Sims",
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
            Assigned: "Mr. John Heart",
            Subject: "Choose between PPO and HMO Health Plan",
            disabled: true
        }, {
            ID: 2,
            Assigned: "Mr. John Heart",
            Subject: "Google AdWords Strategy",
            visible: false
        }, {
            ID: 3,
            Assigned: "Mr. John Heart",
            Subject: "New Brochures"
        }, {
            ID: 4,
            Assigned: "Mr. John Heart",
            Subject: "Update NDA Agreement"
        }, {
            ID: 5,
            Assigned: "Mr. John Heart",
            Subject: "Review Product Recall Report by Engineering Team"
        }, {
            ID: 6,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Update Personnel Files"
        }, {
            ID: 7,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Review Health Insurance Options Under the Affordable Care Act"
        }, {
            ID: 8,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Non-Compete Agreements"
        }, {
            ID: 9,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Give Final Approval for Refunds"
        }, {
            ID: 10,
            Assigned: "Mr. Robert Reagan",
            Subject: "Deliver R&D Plans for 2013"
        }, {
            ID: 11,
            Assigned: "Mr. Robert Reagan",
            Subject: "Decide on Mobile Devices to Use in the Field"
        }, {
            ID: 12,
            Assigned: "Mr. Robert Reagan",
            Subject: "Try New Touch-Enabled WinForms Apps"
        }, {
            ID: 13,
            Assigned: "Mr. Robert Reagan",
            Subject: "Approval on Converting to New HDMI Specification"
        }, {
            ID: 14,
            Assigned: "Ms. Greta Sims",
            Subject: "Approve Hiring of John Jeffers"
        }, {
            ID: 15,
            Assigned: "Ms. Greta Sims",
            Subject: "Update Employee Files with New NDA"
        }, {
            ID: 16,
            Assigned: "Ms. Greta Sims",
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
            Assigned: "Mr. John Heart",
            Subject: "Choose between PPO and HMO Health Plan",
            disabled: true
        }, {
            ID: 2,
            Assigned: "Mr. John Heart",
            Subject: "Google AdWords Strategy",
            visible: false
        }, {
            ID: 3,
            Assigned: "Mr. John Heart",
            Subject: "New Brochures"
        }, {
            ID: 4,
            Assigned: "Mr. John Heart",
            Subject: "Update NDA Agreement"
        }, {
            ID: 5,
            Assigned: "Mr. John Heart",
            Subject: "Review Product Recall Report by Engineering Team"
        }, {
            ID: 6,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Update Personnel Files"
        }, {
            ID: 7,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Review Health Insurance Options Under the Affordable Care Act"
        }, {
            ID: 8,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Non-Compete Agreements"
        }, {
            ID: 9,
            Assigned: "Mrs. Olivia Peyton",
            Subject: "Give Final Approval for Refunds"
        }, {
            ID: 10,
            Assigned: "Mr. Robert Reagan",
            Subject: "Deliver R&D Plans for 2013"
        }, {
            ID: 11,
            Assigned: "Mr. Robert Reagan",
            Subject: "Decide on Mobile Devices to Use in the Field"
        }, {
            ID: 12,
            Assigned: "Mr. Robert Reagan",
            Subject: "Try New Touch-Enabled WinForms Apps"
        }, {
            ID: 13,
            Assigned: "Mr. Robert Reagan",
            Subject: "Approval on Converting to New HDMI Specification"
        }, {
            ID: 14,
            Assigned: "Ms. Greta Sims",
            Subject: "Approve Hiring of John Jeffers"
        }, {
            ID: 15,
            Assigned: "Ms. Greta Sims",
            Subject: "Update Employee Files with New NDA"
        }, {
            ID: 16,
            Assigned: "Ms. Greta Sims",
            Subject: "Provide New Health Insurance Docs"
        }
    ];


--- 

[tags] data binding