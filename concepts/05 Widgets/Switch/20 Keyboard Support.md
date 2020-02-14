An end user can use the following keys to interact with the widget.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Enter or Space</td>
      <td>Changes the widget value.</td>
    </tr>
    <tr>
      <td>&rarr;</td>
      <td>Changes the switch state to "On".</td>
    </tr>
    <tr>
      <td>&larr;</td>
      <td>Changes the switch state to "Off".</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!-- tab: index.js -->
    function registerKeyHandlers () {
        const switch =  $("#switchContainer").dxSwitch("instance");
        switch.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        switch.registerKeyHandler("space", function (e) {
            // ...
        });
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component, ViewChild, AfterViewInit } from '@angular/core';
    import { Dx{WidgetName}Component } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit {
        @ViewChild(Dx{WidgetName}Component, { static: false }) switch: Dx{WidgetName}Component
        // Prior to Angular 8
        // @ViewChild(Dx{WidgetName}Component) switch: Dx{WidgetName}Component
        ngAfterViewInit () {
            this.switch.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.switch.instance.registerKeyHandler("space", function (e) {
                // ...
            });
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
        <Dx{WidgetName} @initialized="registerKeyHandlers" />
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
            registerKeyHandlers({ component }) {
                component.registerKeyHandler("backspace", function (e) {
                    // The argument "e" contains information on the event
                });
                component.registerKeyHandler("space", function (e) {
                    // ...
                });
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
                <{WidgetName} onInitialized={this.registerKeyHandlers} />
            );
        }

        registerKeyHandlers({ component }) {
            component.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            component.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    export default App;

---

#####See Also#####
#include common-link-callmethods
- [Switch Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Switch/Overview)
- [Switch API Reference](/api-reference/10%20UI%20Widgets/dxSwitch '/Documentation/ApiReference/UI_Widgets/dxSwitch/')

[tags]switch, navigation, accessibility, keyboard shortcuts