---
id: GridBaseColumn.headerFilter.groupInterval
type: Enums.HeaderFilterGroupInterval | Number | undefined
default: undefined
---
---
##### shortDescription
Specifies how the header filter combines values into groups. Does not apply if you [specify a custom header filter data source](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Customize%20Header%20Filter%20Data%20Source/10%20Specify%20a%20Custom%20Data%20Source.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Specify_a_Custom_Data_Source').

---
For numeric columns, assign a number to this property. This number designates a step with which to generate groups. Column values are classified into these groups.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/"
}

For date columns, set this property to one of the accepted string values above. Dates are grouped into a hierarchy, and the string value indicates its lowest level. The default level is *"day"* which means that the header filter forms the following hierarchy: Year &rarr; Month &rarr; Day. You can disable the hierarchical display if you set the **groupInterval** to **null**. In this case, you also need to implement the column's [calculateFilterExpression](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateFilterExpression') function as follows:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
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
            [calculateFilterExpression]="calculateFilterExpression">
            <dxo-header-filter
                [groupInterval]="null">
            </dxo-header-filter>
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
                :calculate-filter-expression="calculateFilterExpression">
                <DxHeaderFilter
                    :group-interval="null"
                />
            </DxColumn>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxHeaderFilter
        },
        data() {
            return {
                calculateFilterExpression(value, operation, target) {
                    const column = this as any;

                    if(value && target === "headerFilter") {
                        return [column.dataField, operation, value];
                    }
                    return column.defaultCalculateFilterExpression.apply(column, arguments);
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column,
        HeaderFilter
    } from 'devextreme-react/{widget-name}';

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
                    calculateFilterExpression={calculateFilterExpression}>
                    <HeaderFilter
                        groupInterval={null}
                    />
                </Column>
            </{WidgetName}>
        );
    }

---

