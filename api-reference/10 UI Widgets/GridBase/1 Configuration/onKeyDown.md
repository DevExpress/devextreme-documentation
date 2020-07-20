---
id: GridBase.Options.onKeyDown
type: function(e)
default: null
EventForAction: GridBase.keyDown
---
---
##### shortDescription
A function that is executed when the widget is in focus and a key has been pressed down.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
The event that caused the function to execute. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery. This event is based on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event" target="_blank">keydown</a> native event.

##### field(e.handled): Boolean
Indicates whether the widget has already handled this event.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            onKeyDown(e) {
                if (e.event.ctrlKey && e.event.key === "Q") {
                    console.log("Ctrl + Q was pressed"); 
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onKeyDown)="onKeyDown($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onKeyDown(e) {
            if (e.event.ctrlKey && e.event.key === "Q") {
                console.log("Ctrl + Q was pressed"); 
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
            @key-down="onKeyDown">            
        </Dx{WidgetName}>
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
            onKeyDown(e) {
                if (e.event.ctrlKey && e.event.key === "Q") {
                    console.log("Ctrl + Q was pressed"); 
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

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ...
                    onKeyDown={this.onKeyDown}>
                </{WidgetName}>
            );
        }

        onKeyDown(e) {
            if (e.event.ctrlKey && e.event.key === "Q") {
                console.log("Ctrl + Q was pressed"); 
            }
        }
    }
    export default App;

---