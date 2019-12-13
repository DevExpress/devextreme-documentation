---
id: BaseChart.Options.animation
type: Object | Boolean
---
---
##### shortDescription
Specifies animation options.

---
The widget animates its elements at the beginning of its lifetime and when the data source changes.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            animation: {
                easing: "linear",
                duration: 500,
                maxPointCountSupported: 100
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-animation
            easing="linear"
            [duration]="500"
            [maxPointCountSupported]="100">
        </dxo-animation>
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
            <dx-animation
                easing="linear"
                :duration="500"
                :max-point-count-supported="100"
            />
        </dx-{widget-name}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxAnimation
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxAnimation
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Animation 
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Animation
                        easing="linear"
                        duration={500}
                        maxPointCountSupported={100}
                    />
                </{WidgetName}>
            );
        }
    }
    export default App;

---