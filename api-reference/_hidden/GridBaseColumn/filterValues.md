---
id: GridBaseColumn.filterValues
type: Array<any>
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies values selected in the column's [header filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#Header_Filter').

---
If the **headerFilter**.[groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '{basewidgetpath}/Configuration/columns/headerFilter/#groupInterval') property is set, each value in the **filterValues** array specifies the beginning of an interval instead of an exact value:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                dataField: "ID",
                dataType: "number",
                headerFilter: { groupInterval: 100 },
                filterValues: [500, 700], // Filter intervals are 500-600 and 700-800
            },
            // ...
            ]
        })
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="ID"
            dataType="number"
            [filterValues]="[500, 700]"> <!-- Filter intervals are 500-600 and 700-800 -->
            <dxo-header-filter
                [groupInterval]="100">
            </dxo-header-filter>
        </dxi-column>
    </dx-{widget-name}>

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
        <Dx{WidgetName}>
            <DxColumn
                data-field="ID"
                data-type="number"
                :filter-values="[500, 700]"> <!-- Filter intervals are 500-600 and 700-800 -->
                <DxHeaderFilter
                    :group-interval="100"
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
        // ...
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

    export default function App() {
        return (
            <{WidgetName}>
                <Column
                    dataField="ID"
                    dataType="number"
                    filterValues={[500, 700]}> {/* Filter intervals are 500-600 and 700-800 */}
                    <HeaderFilter
                        groupInterval={100}>
                    </HeaderFilter>
                </Column>
            </{WidgetName}>
        );
    }

---

#include datagrid-filtering-rowandheaderconflicts

#####See Also#####
- [Filtering - Header Filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/UI_Components/{WidgetName}/Filtering_and_Searching/#Header_Filter')