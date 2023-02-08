---
default:  {height: 100, width: 300} or {height: 300, width: 100}
---
The default size of the component depends on the [geometry](/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/geometry/).[orientation](/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/geometry/#orientation) property value:

    <!-- tab: 'horizontal' -->{
        height: 100,
        width: 300
    }

    <!-- tab: 'vertical' -->{
        height: 300,
        width: 100
    }

You can specify custom width and height for the component:

<table class="dx-table">
    <tr>
        <th>Fixed</th>
        <th>Relative</th>
    </tr>
    <tr>
        <td>Assign values to the <b>size</b> object's <b>height</b> and <b>width</b> properties or specify a container for the component.</td>
        <td>Specify a container for the component. The component occupies the container area.</td>
    </tr>
</table>

[note] The **size** object has priority over the container.

Assign 0 to the **size** object's **height** and **width** properties to hide the component.

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
