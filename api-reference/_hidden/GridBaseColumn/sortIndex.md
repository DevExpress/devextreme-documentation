---
id: GridBaseColumn.sortIndex
type: Number | undefined
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the index according to which columns participate in sorting.

---
This property accepts an integer specifying the index of the column in a collection of columns with applied sorting. For example, consider the following data source that can provide data for three columns.

    <!--JavaScript-->
    const dataSource = [
        { firstName: "John", lastName: "Doe", title: "Sales Manager" },
        { firstName: "Michael", lastName: "King", title: "Sales Representative" },
        // ...
    ];

To sort data first by the *"Last Name"* and then by the *"First Name"* column, use the following code. Note that the [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '{basewidgetpath}/Configuration/columns/#sortOrder') property should also be specified.
    
---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [
                { dataField: "firstName", sortIndex: 1, sortOrder: "asc" },
                { dataField: "lastName", sortIndex: 0, sortOrder: "asc" },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column dataField="firstName" [sortIndex]="1" sortOrder="asc"></dxi-column>
        <dxi-column dataField="lastName" [sortIndex]="0" sortOrder="asc"></dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn
                data-field="firstName"
                :sort-index="1"
                sort-order="asc"
            />
            <DxColumn
                data-field="lastName"
                :sort-index="0"
                sort-order="asc"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column
                    dataField="firstName"
                    sortIndex={1}
                    sortOrder="asc"
                />
                <Column
                    dataField="lastName"
                    sortIndex={0}
                    sortOrder="asc"
                />
            </{WidgetName}>
        );
    }
    
---

You can set the **sortIndex** property at design time to specify initial sorting, or change this property using the [columnOption](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '{basewidgetpath}/Methods/#columnOptionid_optionName_optionValue') method to sort at runtime.