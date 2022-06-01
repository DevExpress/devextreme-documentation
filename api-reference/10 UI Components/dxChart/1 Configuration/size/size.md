The Chart component's size depends on the following priority:

1. You specify the **size** object.    
The Chart changes its dimensions depending on this object.

2. You do not specify the **size** object.   
The Chart occupies the container area.

3. You do not specify neither the **size** object nor the container.   
The Chart's size is `width: 400px; height: 400px`.

Assign 0 to **size** object's **height** and **width** properties to hide the Chart component.

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
        <Dx{WidgetName} ... >
            <DxSize
                :height="300"
                :width="600"
            />
        </Dx{WidgetName}>
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

Alternatively, you can use CSS to style the UI component's container:

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
        <Dx{WidgetName} ...
            id="{widgetName}">
        </Dx{WidgetName}>
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
