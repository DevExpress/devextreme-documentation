---
id: GridBase.Options.stateStoring.customLoad
type: function()
---
---
##### shortDescription
Specifies a function that is executed on state loading. Applies only if the [type](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring/type.md '{basewidgetpath}/Configuration/stateStoring/#type') is *'custom'*.

##### return: Promise<Object>
The UI component state. As a rule, it is a state that you save within the [customSave](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring/customSave.md '{basewidgetpath}/Configuration/stateStoring/#customSave') function.

---
Use the **customSave** and **customLoad** functions to manually implement state storing: in **customSave**, save the state to a custom storage; in **customLoad**, load it. See an example in the [customSave](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring/customSave.md '{basewidgetpath}/Configuration/stateStoring/#customSave') topic.

You can also use **customSave** and **customLoad** to omit specific state properties. In the example below, columns' filter values are omitted:

---
##### jQuery

    <!-- tab: index.js-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            filterRow: { visible: true },
            stateStoring: {  
                enabled: true,  
                storageKey: "storage",  
                type: "custom",  
                customLoad: function () {  
                    var state = localStorage.getItem(this.storageKey);  
                    if (state) {  
                        state = JSON.parse(state);  
                        for (var i = 0; i < state.columns.length; i++) {  
                            state.columns[i].filterValue = null;  
                        }  
                    }  
                    return state;  
                },  
                customSave: function (state) {  
                    localStorage.setItem(this.storageKey, JSON.stringify(state));  
                },  
            }
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

If you need to get state on demand, call the [state()]({basewidgetpath}/Methods/#state) method.