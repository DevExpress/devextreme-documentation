---
id: dxPivotGrid.Options.onContextMenuPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before the context menu is rendered.

##### param(e): ContextMenuPreparingEvent
Information about the event.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SummaryDisplayModes/"
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
