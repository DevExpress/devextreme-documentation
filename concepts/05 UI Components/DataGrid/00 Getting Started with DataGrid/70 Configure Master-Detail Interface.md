**DataGrid** allows you to display expandable detail sections under data rows. To configure a UI like this, use the [masterDetail](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/) object. Set the [enabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/#enabled) property to **true** and specify a [template](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/masterDetail/#template) that is used as the detail section's content:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            masterDetail: {
                enabled: true,
                template: function (_, options) {
                    const employee = options.data;
                    const photo = $("<img>")
                        .addClass("employee-photo")
                        .attr("src", employee.Photo);
                    const notes = $("<p>")
                        .addClass("employee-notes")
                        .text(employee.Notes);
                    return $("<div>").append(photo, notes);
                }
            },
        });
    });

    <!-- tab: data.js -->
    const employees = [{
        "EmployeeID": 1,
        "FullName": "Nancy Davolio",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1968-12-08T00:00:00.000Z",
        "HireDate": "2011-05-01T00:00:00.000Z",
        "Address": "507 - 20th Ave. E.\r\nApt. 2A",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "USA",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
        "Notes": "Education includes a BA in psychology from Colorado State University in 1990.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
        "ReportsTo": 2
    },
    // ...
    ];

    <!-- tab: index.css -->
    .employee-photo {
        height: 140px;
        float: left;
        padding: 0 20px 20px 0;
    }

    .employee-notes {
        text-align: justify;
        white-space: normal;
    }

    /* ... */

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxo-master-detail
            [enabled]="true"
            [template]="'employee-info'">
        </dxo-master-detail>
        <div *dxTemplate="let employee of 'employee-info'">
            <img class="employee-photo" [src]="employee.data.Photo">
            <p class="employee-notes">{{ employee.data.Notes }}</p>
        </div>
    </dx-data-grid>

    <!-- tab: employees.service.ts -->
    // ...
    const employees: Employee[] = [{
        "EmployeeID": 1,
        "FullName": "Nancy Davolio",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1968-12-08T00:00:00.000Z",
        "HireDate": "2011-05-01T00:00:00.000Z",
        "Address": "507 - 20th Ave. E.\r\nApt. 2A",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "USA",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
        "Notes": "Education includes a BA in psychology from Colorado State University in 1990.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
        "ReportsTo": 2
    },
    // ...
    ];
    // ...

    <!-- tab: app.component.css -->
    .employee-photo {
        height: 140px;
        float: left;
        padding: 0 20px 20px 0;
    }
    
    .employee-notes {
        text-align: justify;
        white-space: normal;
    }

    /* ... */

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ... >
                <!-- ... -->
                <DxMasterDetail
                    :enabled="true"
                    template="employee-info"
                />
                <template #employee-info="{ data: employee }">
                    <div>
                        <img class="employee-photo" :src="employee.data.Photo">
                        <p class="employee-notes">{{ employee.data.Notes }}</p>
                    </div>
                </template>
            </DxDataGrid>
        </div>
    </template>

    <script>
    import {
        DxDataGrid,
        // ...
        DxMasterDetail
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            // ...
            DxMasterDetail
        },
        // ...
    }
    </script>

    <style>
    .employee-photo {
        height: 140px;
        float: left;
        padding: 0 20px 20px 0;
    }
        
    .employee-notes {
        text-align: justify;
        white-space: normal;
    }

    /* ... */
    </style>

    <!-- tab: employees.service.js -->
    const employees = [{
        "EmployeeID": 1,
        "FullName": "Nancy Davolio",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1968-12-08T00:00:00.000Z",
        "HireDate": "2011-05-01T00:00:00.000Z",
        "Address": "507 - 20th Ave. E.\r\nApt. 2A",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "USA",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
        "Notes": "Education includes a BA in psychology from Colorado State University in 1990.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
        "ReportsTo": 2
    },
    // ...
    ];

##### React

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import {
        DataGrid,
        Column,
        // ...
        MasterDetail
    } from 'devextreme-react/data-grid';
    // ...

    function DetailSection(props) {
        const employee = props.data.data;
        return (
            <div>
                <img
                    className="employee-photo"
                    alt={employee.FullName}
                    src={employee.Photo}
                />
                <p className="employee-notes">{employee.Notes}</p>
            </div>
        );
    }

    function App() {
        // ...
        return (
            <div className="App">
                <DataGrid ... >
                    {/* ... */}
                    <MasterDetail
                        enabled={true}
                        component={DetailSection}
                    />
                </DataGrid>
            </div>
        );
    }

    export default App;

    <!-- tab: employees.js -->
    export const employees = [{
        "EmployeeID": 1,
        "FullName": "Nancy Davolio",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1968-12-08T00:00:00.000Z",
        "HireDate": "2011-05-01T00:00:00.000Z",
        "Address": "507 - 20th Ave. E.\r\nApt. 2A",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "USA",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
        "Notes": "Education includes a BA in psychology from Colorado State University in 1990.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
        "ReportsTo": 2
    },
    // ...
    ];
    
    <!-- tab: App.css -->
    /* ... */
    .employee-photo {
        height: 140px;
        float: left;
        padding: 0 20px 20px 0;
    }

    .employee-notes {
        text-align: justify;
        white-space: normal;
    }

---

Run the code and click the Expand button in any row. You should see a detail section that contains an employee's photo and information.