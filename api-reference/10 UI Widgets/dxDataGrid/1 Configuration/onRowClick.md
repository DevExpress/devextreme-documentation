---
id: dxDataGrid.Options.onRowClick
type: function(e) | String
default: null
EventForAction: dxDataGrid.rowClick
---
---
##### shortDescription
A function that is executed when a row is clicked or tapped.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<Object>
All column [configurations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The row's data.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.groupIndex): Number
The row's [group index](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex'). Available if **rowType** is *"group"*.

##### field(e.handled): Boolean
Indicates whether internal widget functions have already handled the event.

##### field(e.isExpanded): Boolean
Indicates whether or not the group row is expanded. Available if **rowType** is *"group"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the row is [selected](/concepts/05%20Widgets/DataGrid/50%20Selection '/Documentation/Guide/Widgets/DataGrid/Selection/').

##### field(e.key): any
The row's key.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType').

##### field(e.values): Array<any>
Values displayed in the row cells.

---
The widget executes the [onCellClick](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellClick') function and can also execute internal functions before this function. Use the **handled** field to check whether internal functions were executed.

In the following code, the **onRowClick** function calls the [editRow](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/editRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#editRowrowIndex') method to switch the clicked row to the editing state. This functionality is best applied in [form](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FormEditing) or [popup](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PopupEditing) **editing**.[mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode'):

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            editing: { mode: "form "},
            onRowClick: function(e) {
                if(e.rowType === "data") {
                    e.component.editRow(e.rowIndex);
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onRowClick)="startEdit($event)">
        <dxo-editing mode="form"></dxo-editing>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
   
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        startEdit(e) {
            if(e.rowType === "data") {
                e.component.editRow(e.rowIndex);
            }
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
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            @row-click="startEdit">
            <DxEditing mode="form" />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxEditing 
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
           startEdit(e) {
                if(e.rowType === "data") {
                    e.component.editRow(e.rowIndex);
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Editing 
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ...
                    onRowClick={this.startEdit}>
                    <Editing mode="form">
                </{WidgetName}>
            );
        }

        startEdit = (e) => {
            if(e.rowType === "data") {
                e.component.editRow(e.rowIndex);
            }
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Editing(e => e.Mode(GridEditMode.Form))
        .OnRowClick("startEdit")
    )

    <script type="text/javascript">
        function startEdit(e) {
            if(e.rowType === "data") {
                e.component.editRow(e.rowIndex);
            }
        }
    </script>

---

[note] The **onRowClick** function is not executed when the clicked row enters or is in the editing state. Instead, specify the **onCellClick** function.