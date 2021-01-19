---
id: dxPivotGrid.Options.onCellPrepared
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a pivot grid cell is created.

##### param(e): Object
Information about the event.

##### field(e.area): String
The [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') to which the prepared cell belongs.

##### field(e.cell): dxPivotGridPivotGridCell
The cell [properties](/api-reference/10%20UI%20Widgets/dxPivotGrid/6%20Pivot%20Grid%20Cell '/Documentation/ApiReference/UI_Components/dxPivotGrid/Pivot_Grid_Cell/').

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "prepared cell" }

##### field(e.columnIndex): Number
The position of a cell's column.

##### field(e.component): {WidgetName}
The UI component [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#instance').

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rowIndex): Number
The position of a cell's row.

---

In the following code the **onCellPrepared** event handler is used to customize cells' apperance depending on the area and field types:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onCellPrepared: function(e) {          
                if(e.area === "row" || e.area === "column") 
                    e.cellElement.css("font-weight", "bold")
                if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                    e.cellElement.css("backgroundColor", "lightGreen")
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onCellPrepared)="onCellPrepared($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
   
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
       onCellPrepared(e) {          
            if(e.area === "row" || e.area === "column") 
                e.cellElement.style.fontWeight = "bold";
            if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                e.cellElement.style.backgroundColor = "lightGreen";
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
            @cell-prepared="onCellPrepared"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
            onCellPrepared(e) {          
                if(e.area === "row" || e.area === "column") 
                    e.cellElement.style.fontWeight = "bold";
                if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                    e.cellElement.style.backgroundColor = "lightGreen";
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ...
                    onCellPrepared={this.onCellPrepared}
                />
            );
        }
        onCellPrepared(e) {          
            if(e.area === "row" || e.area === "column") 
                e.cellElement.style.fontWeight = "bold";
            if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                e.cellElement.style.backgroundColor = "lightGreen";
        }
    }
    export default App;

---
