---
id: dxPivotGrid.Options.onContextMenuPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.area): String
The clicked [area's](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') type.

##### field(e.cell): dxPivotGridPivotGridCell
The cell that has been clicked to invoke the context menu.    
Unavailable for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.cellElement): DxElement
#include common-ref-elementparam with { element: "clicked cell" } 
Unavailable for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.columnFields): Array<PivotGridDataSource_Options_fields>
Fields in the "column" area.

##### field(e.columnIndex): Number
The index of the column to which the clicked cell belongs.    
Unavailable for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel').

##### field(e.component): dxPivotGrid
The UI component's instance.

##### field(e.dataFields): Array<PivotGridDataSource_Options_fields>
Fields in the "data" area.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.field): PivotGridDataSource_Options_fields
This field's [configuration](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/').    
Available for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel') only.

##### field(e.items): Array<Object>
An array of items to be displayed by the context menu. Their structure is described in the [items](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/items/') property description.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.rowFields): Array<PivotGridDataSource_Options_fields>
Fields in the "row" area.

##### field(e.rowIndex): Number
The index of the row to which the clicked cell belongs.    
Unavailable for fields in the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel').

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SummaryDisplayModes/"
}

In the following code, the **onContextMenuPreparing** function adds a custom item to the context menu invoked when a user right-clicks any column header:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onContextMenuPreparing: function(e) { 
                // e.items can be undefined
                if (!e.items) e.items = [];
                if (e.field && e.field.dataField === 'amount') {
                    // Add a custom menu item
                    e.items.push({
                        text: 'test name',
                        value: '1',
                        onItemClick() {
                            console.log('value is ' + e.itemData.value);
                        }
                    });
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onContextMenuPreparing)="addMenuItems($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        addMenuItems(e) { 
            // e.items can be undefined
            if (!e.items) e.items = [];
            if (e.field && e.field.dataField === 'amount') {
                // Add a custom menu item
                e.items.push({
                    text: 'test name',
                    value: '1',
                    onItemClick() {
                        console.log('value is ' + e.itemData.value);
                    }
                });
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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            @context-menu-preparing="addMenuItems">
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                // ...
            }
        },
        methods: {
            addMenuItems(e) {
                // e.items can be undefined
                if (!e.items) e.items = [];
                if (e.field && e.field.dataField === 'amount') {
                    // Add a custom menu item
                    e.items.push({
                        text: 'test name',
                        value: '1',
                        onItemClick() {
                            console.log('value is ' + e.itemData.value);
                        }
                    });
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';


    class App extends React.Component {
        addMenuItems(e) {
            // e.items can be undefined
            if (!e.items) e.items = [];
            if (e.field && e.field.dataField === 'amount') {
                // Add a custom menu item
                e.items.push({
                    text: 'test name',
                    value: '1',
                    onItemClick() {
                        console.log('value is ' + e.itemData.value);
                    }
                });
            }
        }

        render() {
            return (
                <{WidgetName} ...
                    onContextMenuPreparing={this.addMenuItems}>
                </{WidgetName}>
            );
        }
    }
    export default App;

---
