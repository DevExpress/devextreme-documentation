---
id: dxCardView.Options.onContextMenuPreparing
type: function(e)
---
---
##### shortDescription
A function that is executed before the context menu is rendered.

##### param(e): ui/card_view:ContextMenuPreparingEvent
Information about the event that caused the function's execution.

##### field(e.card): any
The card properties.

##### field(e.cardIndex): Number
The index of the card on which the context menu is invoked.

##### field(e.column): Column
This column's [configuration](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties '{basewidgetpath}/Configuration/columns/').

##### field(e.columnIndex): Number
The index of the column on which the context menu is invoked.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.items): Array<any>
Items to be displayed in the context menu. Their structure is described in the [items](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/items/') property description. Each item also contains the [onItemClick](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/#onItemClick') event handler, which allows you to access the clicked or tapped item's data.

##### field(e.target): Enums.ContextMenuTarget
The name of the element on which the context menu is invoked: *"headerPanel"*, *"content"*, or *"toolbar"*. This field is read-only.

##### field(e.targetElement): DxElement
#include common-ref-elementparam with { element: "target element" }

---
In the following code, the **onContextMenuPreparing** function adds a custom item to the context menu that is invoked when a user right-clicks any column header:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onContextMenuPreparing: function(e) { 
                if (e.target == "headerPanel") {
                    // e.items can be undefined
                    if (!e.items) e.items = [];

                    // Add a custom menu item
                    e.items.push({
                        text: "Log Column Caption",
                        onItemClick: function() {
                            console.log(e.column.caption);
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
            if (e.target == 'headerPanel') {
                // e.items can be undefined
                if (!e.items) e.items = [];

                // Add a custom menu item
                e.items.push({
                    text: 'Log Column Caption',
                    onItemClick: () => {
                        console.log(e.column.caption);
                    }
                });
            } 
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            @context-menu-preparing="addMenuItems">
        </Dx{WidgetName}>
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    const addMenuItems = (e) => {
        if (e.target == 'headerPanel') {
            // e.items can be undefined
            if (!e.items) e.items = [];

            // Add a custom menu item
            e.items.push({
                text: 'Log Column Caption',
                onItemClick: () => {
                    console.log(e.column.caption);
                }
            });
        } 
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import {WidgetName} from 'devextreme-react/{widget-name}';

    const App = () => {
        const addMenuItems = (e) => {
            if (e.target == 'headerPanel') {
                // e.items can be undefined
                if (!e.items) e.items = [];

                // Add a custom menu item
                e.items.push({
                    text: 'Log Column Caption',
                    onItemClick: () => {
                        console.log(e.column.caption);
                    }
                });
            }
        }
        return (
            <{WidgetName} ...
                onContextMenuPreparing={this.addMenuItems}>
            </{WidgetName}>
        );
    }
    export default App;

---