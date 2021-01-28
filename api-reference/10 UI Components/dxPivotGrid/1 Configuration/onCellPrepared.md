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
The cell [properties](/api-reference/10%20UI%20Widgets/dxPivotGrid/6%20Pivot%20Grid%20Cell '/Documentation/ApiReference/UI_Components/dxPivotGrid/Pivot_Grid_Cell/'). This field is read-only. 

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "prepared cell" }

##### field(e.columnIndex): Number
The position of a cell's column.

##### field(e.component): PivotGrid
The UI component [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#instance').

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rowIndex): Number
The position of a cell's row.

---

In the following code the **onCellPrepared** event handler is used to customize cells' apperance depending on the area and field types:

The following code how to locate and customize cells under different conditions:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGridContainer").dxPivotGrid({
            // ...
            onCellPrepared: function(e) {
                if(e.area === "row" || e.area === "column") 
                    e.cellElement.css("font-weight", "bold")
                if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                    e.cellElement.css("backgroundColor", "lightGreen")
                if(e.cell.rowPath === "requiredRowName" && e.cell.columnPath === "requiredColumnName")
                    e.cellElement.html(
                        // Specify content for a separate cell here
                    )
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pivot-grid ...
        (onCellPrepared)="onCellPrepared($event)">
    </dx-pivot-grid>

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
            if(e.cell.rowPath === "requiredRowName" && e.cell.columnPath === "requiredColumnName")
                e.cellElement.html(
                    // Specify content for a separate cell here
                )
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxPivotGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPivotGridModule
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ...
            @cell-prepared="onCellPrepared"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    export default {
        components: {
            DxPivotGrid
        },
        methods: {
            onCellPrepared(e) {          
                if(e.area === "row" || e.area === "column") 
                    e.cellElement.style.fontWeight = "bold";
                if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                    e.cellElement.style.backgroundColor = "lightGreen";
                if(e.cell.rowPath === "requiredRowName" && e.cell.columnPath === "requiredColumnName")
                    e.cellElement.html(
                        // Specify content for a separate cell here
                    )
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import PivotGrid from 'devextreme-react/pivot-grid';

    class App extends React.Component {
        render() {
            return (
                <PivotGrid ...
                    onCellPrepared={this.onCellPrepared}
                />
            );
        }
        onCellPrepared(e) {          
            if(e.area === "row" || e.area === "column") 
                e.cellElement.style.fontWeight = "bold";
            if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                e.cellElement.style.backgroundColor = "lightGreen";
            if(e.cell.rowPath === "requiredRowName" && e.cell.columnPath === "requiredColumnName")
                e.cellElement.html(
                    // Specify content for a separate cell here
                )
        }
    }
    export default App;

---
