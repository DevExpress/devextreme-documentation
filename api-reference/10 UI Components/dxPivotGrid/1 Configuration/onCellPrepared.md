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
The cell [properties](/api-reference/10%20UI%20Components/dxPivotGrid/6%20Pivot%20Grid%20Cell '/Documentation/ApiReference/UI_Components/dxPivotGrid/Pivot_Grid_Cell/'). This field is read-only.

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "prepared cell" }

##### field(e.columnIndex): Number
The position of a cell's column.

##### field(e.component): dxPivotGrid
The UI component [instance](/api-reference/10%20UI%20Components/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#instance').

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.rowIndex): Number
The position of a cell's row.

---
This function allows you to customize cells and modify their content. Common use-cases are as follows:

- Use CSS to apply styles to a **cellElement**. The code below customizes font in a separate cell:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#pivotGridContainer").dxPivotGrid({
                // ...
                onCellPrepared: function(e) {
                    if(e.cell.rowPath === "rowName" && e.cell.columnPath === "columnName") {
                        e.cellElement.css("font-size", "14px");
                        e.cellElement.css("font-weight", "bold");
                    }
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
                if(e.cell.rowPath === "rowName" && e.cell.columnPath === "columnName") {
                    e.cellElement.style.fontSize = "14px";
                    e.cellElement.style.fontWeight = "bold";
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
        import 'devextreme/dist/css/dx.light.css';

        import DxPivotGrid from 'devextreme-vue/pivot-grid';

        export default {
            components: {
                DxPivotGrid
            },
            methods: {
                onCellPrepared(e) {          
                    if(e.cell.rowPath === "rowName" && e.cell.columnPath === "columnName") {
                        e.cellElement.style.fontSize = "14px";
                        e.cellElement.style.fontWeight = "bold";
                    }
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React, { useCallback } from 'react';
        import 'devextreme/dist/css/dx.light.css';
        import PivotGrid from 'devextreme-react/pivot-grid';

        const App = () => {
            const customizeCells = useCallback((e) {          
                if(e.cell.rowPath === "rowName" && e.cell.columnPath === "columnName") {
                    e.cellElement.style.fontSize = "14px";
                    e.cellElement.style.fontWeight = "bold";
                }
            }, []);
            
            return (
                <PivotGrid ...
                    onCellPrepared={customizeCells}
                />
            );
        }
        export default App;

    ---


- Add a class to a **cellElement**. The following code adds a custom class to cells in the [Grand Total](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/05%20Totals/03%20Grand%20Total%20Row%20and%20Column.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Totals/Grand_Total_Row_and_Column') row and column. This code also adds another class to all cells in the *"row"* and *"column"* areas:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#pivotGridContainer").dxPivotGrid({
                // ...
                onCellPrepared: function(e) {
                    if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                        e.cellElement.addClass("your-custom-class");
                    if(e.area === "row" || e.area === "column")
                        e.cellElement.addClass("another-custom-class");
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
                if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                    e.cellElement.addClass("your-custom-class");
                if(e.area === "row" || e.area === "column")
                    e.cellElement.addClass("another-custom-class");
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
        import 'devextreme/dist/css/dx.light.css';

        import DxPivotGrid from 'devextreme-vue/pivot-grid';

        export default {
            components: {
                DxPivotGrid
            },
            methods: {
                onCellPrepared(e) {          
                    if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                        e.cellElement.addClass("your-custom-class");
                    if(e.area === "row" || e.area === "column")
                        e.cellElement.addClass("another-custom-class");
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React, { useCallback } from 'react';
        import 'devextreme/dist/css/dx.light.css';

        import PivotGrid from 'devextreme-react/pivot-grid';

        const App = () => {
            const customizeCells = useCallback((e) {          
                if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                    e.cellElement.addClass("your-custom-class")
                if(e.area === "row" || e.area === "column")
                    e.cellElement.addClass("another-custom-class");
            }, []);
            
            return (
                <PivotGrid ...
                    onCellPrepared={customizeCells}
                />
            );
        }
        export default App;

    ---

    

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/ExcelJSCellCustomization/"
}
