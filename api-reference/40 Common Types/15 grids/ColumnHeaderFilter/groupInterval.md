---
id: ColumnHeaderFilter.groupInterval
type: Enums.HeaderFilterGroupInterval | Number | Array<String, Number> | undefined
default: undefined
---
---
##### shortDescription
Specifies how the header filter combines values into groups.

---
If you [specify a custom header filter data source](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Customize%20Header%20Filter%20Data%20Source/10%20Specify%20a%20Custom%20Data%20Source.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Specify_a_Custom_Data_Source'), assign a string array to **groupInterval**. This array should contain group fields for a [hierarchical header filter](/concepts/05%20UI%20Components/DataGrid/75%20Implement%20a%20Hierarchical%20Header%20Filter/00%20Implement%20a%20Hierarchical%20Header%20Filter.md '/Documentation/Guide/UI_Components/DataGrid/Implement_a_Hierarchical_Header_Filter/').

For numeric columns, assign a number that specifies generated group sizes. Assign a number array to generate hierarchical groups. The following **groupInterval** value divides records into groups of 25 nested within groups of 100:

    [100, 25]

<div class="simulator-desktop-container" data-view="/Content/Applications/26_1/UIWidgets/DataGrid/groupInterval/index.html, /Content/Applications/26_1/UIWidgets/DataGrid/groupInterval/index.js, /Content/Applications/26_1/UIWidgets/DataGrid/groupInterval/index.css"></div>

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/",
    name: "DataGrid - Filtering"
}

For date columns, set this property to a [HeaderFilterGroupInterval](/api-reference/40%20Common%20Types/15%20grids/HeaderFilterGroupInterval.md '/Documentation/ApiReference/Common_Types/grids/#HeaderFilterGroupInterval') value. This value indicates the smallest available filter value. For instance, the *"day"* value allows you to filter date columns by a specific day.

The default header filter for date columns is hierarchical. To implement a non-hierarchical header filter, set **groupInterval** to **null** and specify the [calculateFilterExpression](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateFilterExpression') function:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                // ...
                dataType: 'date',
                headerFilter: {
                    groupInterval: null
                },
                calculateFilterExpression(value, operation, target) {
                    if(value && target === "headerFilter") {
                        return [this.dataField, operation, value];
                    }
                    return this.defaultCalculateFilterExpression.apply(this, arguments);
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-{widget-name}-column ...
            dataType="date"
            [calculateFilterExpression]="calculateFilterExpression">
            <dxo-{widget-name}-header-filter
                [groupInterval]="null"
            ></dxo-{widget-name}-header-filter>
        </dxi-{widget-name}-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        calculateFilterExpression(value, operation, target) {
            const column = this as any;

            if(value && target === "headerFilter") {
                return [column.dataField, operation, value];
            }
            return column.defaultCalculateFilterExpression.apply(column, arguments);
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn ...
                data-type="date"
                :calculate-filter-expression="calculateFilterExpression">
                <DxHeaderFilter
                    :group-interval="null"
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxDataGrid, DxColumn, DxHeaderFilter } from 'devextreme-vue/{widget-name}';

    function calculateFilterExpression(value, operation, target) {
        const column = this;

        if(value && target === "headerFilter") {
            return [column.dataField, operation, value];
        }
        return column.defaultCalculateFilterExpression.apply(column, arguments);
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DataGrid, Column, HeaderFilter } from 'devextreme-react/{widget-name}';

    function calculateFilterExpression (value, operation, target) {
        if(value && target === "headerFilter") {
            return [this.dataField, operation, value];
        }
        return this.defaultCalculateFilterExpression.apply(this, arguments);
    }

    export default function App() {
        return (
            <DataGrid ... >
                <Column ...
                    dataType="date"
                    calculateFilterExpression={calculateFilterExpression}>
                    <HeaderFilter
                        groupInterval={null}
                    />
                </Column>
            </DataGrid>
        );
    }

---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/",
    name: "DataGrid - Filtering"
}
