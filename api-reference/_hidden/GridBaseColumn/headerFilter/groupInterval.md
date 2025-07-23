---
id: GridBaseColumn.headerFilter.groupInterval
type: Enums.HeaderFilterGroupInterval | Number | Array | undefined
default: undefined
---
---
##### shortDescription
Specifies how the header filter combines values into groups.

---
If you [specify a custom header filter data source](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Customize%20Header%20Filter%20Data%20Source/10%20Specify%20a%20Custom%20Data%20Source.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Specify_a_Custom_Data_Source'), **groupInterval** accepts only string arrays that contain group fields for [hierarchical header filters](/Documentation/Guide/UI_Components/DataGrid/Implement_a_Hierarchical_Header_Filter/).

For numeric columns, assign a number that specifies the size of generated groups. For an example of this **groupInterval** implementation, refer to the following demo:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/",
    name: "DataGrid - Filtering"
}

For date columns, set this property to a [HeaderFilterGroupInterval](/Documentation/ApiReference/Common_Types/grids/#HeaderFilterGroupInterval) value. This value indicates the smallest available filter value. For instance, the *"day"* value allows you to filter date columns by a specific day.

The default header filter for date columns is hierarchical. To implement a non-hierarchical header filter, set **groupInterval** to **null** and specify the [calculateFilterExpression](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateFilterExpression') function:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
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
        <dxi-column ...
            dataType="date"
            [calculateFilterExpression]="calculateFilterExpression">
            <dxo-header-filter
                [groupInterval]="null"
            ></dxo-header-filter>
        </dxi-column>
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

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxColumn ...
                data-type="date"
                :calculate-filter-expression="calculateFilterExpression">
                <DxHeaderFilter
                    :group-interval="null"
                />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, DxColumn, DxHeaderFilter } from 'devextreme-vue/{widget-name}';

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
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';

    function calculateFilterExpression (value, operation, target) {
        if(value && target === "headerFilter") {
            return [this.dataField, operation, value];
        }
        return this.defaultCalculateFilterExpression.apply(this, arguments);
    }

    export default function App() {
        return (
            <{WidgetName} ... >
                <Column ...
                    dataType="date"
                    calculateFilterExpression={calculateFilterExpression}>
                    <HeaderFilter
                        groupInterval={null}
                    />
                </Column>
            </{WidgetName}>
        );
    }

---

