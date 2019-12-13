---
id: BaseWidget.Options.size
type: Object
default: undefined
---
---
##### shortDescription
Specifies the widget's size in pixels.

---
The widget occupies its container's entire area by default. Use the **size** object to specify the widget's size if it should be different from that of its container. Assign 0 to **size** object's **height** and **width** options to hide the widget.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            size: {
                height: 300,
                width: 600
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-size
            [height]="300"
            [width]="600">
        </dxo-size>
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
        <dx-{widget-name} ... >
            <dx-size
                :height="300"
                :width="600"
            />
        </dx-{widget-name}>
    </template>

    <script>

    import Dx{WidgetName}, {
        DxSize
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxSize
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName}, {
        Size
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Size
                        height={300}
                        width={600}
                    />
                </{WidgetName}>
            );
        }
    }
    export default App;

---

Alternatively, you can style the widget's container using CSS:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
        });
    });

    <!-- tab: styles.css -->
    #{widgetName} {
        width: 85%;
        height: 70%;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        id="{widgetName}">
    </dx-{widget-name}>

    <!-- tab: app.styles.css -->
    #{widgetName} {
        width: 85%;
        height: 70%;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name} ...
            id="{widgetName}">
        </dx-{widget-name}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        // ...
    }
    </script>

    <style>
    #{widgetName} {
        width: 85%;
        height: 70%;
    }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ...
                    id="{widgetName}">
                </{WidgetName}>
            );
        }
    }
    export default App;

    <!-- tab: styles.css -->
    #{widgetName} {
        width: 85%;
        height: 70%;
    }

---
