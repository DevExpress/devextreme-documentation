---
##### merge

---
When this option is set to **true**, the following applies:

- The editor's value cannot be changed using the UI.
- Built-in action buttons are invisible.
- [Custom action buttons](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/buttons '{basewidgetpath}/Configuration/buttons/') are visible but disabled. If a button should not be disabled, set its **disabled** option to **false**:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                buttons: [{
                    name: "myCustomButton",
                    location: "after",
                    options: {
                        onClick: function(e) {
                            // ...
                        },
                        disabled: false
                    }
                }]
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ... >
            <dxi-button
                name="myCustomButton"
                location="after"
                [options]="myCustomButtonConfig">
            </dxi-button>
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            myCustomButtonConfig = {
                onClick: (e) => {
                    // ...
                },
                disabled: false
            };
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
                <dx-{widget-name}-button
                    name="myCustomButton"
                    location="after"
                    :options="myCustomButtonConfig"
                />
            </dx-{widget-name}>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import Dx{WidgetName}, {
            DxButton as Dx{WidgetName}Button
        } from 'devextreme-vue/{widget-name}';

        export default {
            components: {
                Dx{WidgetName},
                Dx{WidgetName}Button
            },
            data() {
                return {
                    myCustomButtonConfig: {
                        onClick: (e) => {
                            // ...
                        },
                        disabled: false
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

        import {WidgetName}, {
            Button as {WidgetName}Button
        } from 'devextreme-react/{widget-name}';

        class App extends React.Component {
            myCustomButtonConfig = {
                onClick: (e) => {
                    // ...
                },
                disabled: false
            };
            render() {
                return (
                    <{WidgetName}>
                        <{WidgetName}Button
                            name="myCustomButton"
                            location="after"
                            options={this.myCustomButtonConfig}
                        />
                    </{WidgetName}>
                );
            }
        }
        export default App;

    ---

    You can also hide a custom action button when the widget becomes read-only. Set the button's **visible** option to **false** in the [onOptionChanged](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/onOptionChanged.md '{basewidgetpath}/Configuration/#onOptionChanged') function. To get the button, use the [getButton(name)](/api-reference/10%20UI%20Widgets/dxTextEditor/3%20Methods/getButton(name).md '{basewidgetpath}/Methods/#getButtonname') method:

    ---
    ##### jQuery

        <!-- tab: index.js -->
        $(function() {
            $("#{widgetName}Container").dx{WidgetName}({
                // ...
                buttons: [{
                    name: "myCustomButton",
                    // ...
                }],
                onOptionChanged: function(e) {
                    if(e.name == "readOnly") {
                        var myButton = e.component.getButton("myCustomButton");
                        myButton.option("visible", !e.value); // Hide the button when readOnly: true
                    }
                }
            });
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-{widget-name} ...
            (onOptionChanged)="changeButtonState">
            <dxi-button
                name="myCustomButton"
                ...
            ></dxi-button>
        </dx-{widget-name}>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            changeButtonState(e) {
                if(e.name == 'readOnly') {
                    let myButton = e.component.getButton('myCustomButton');
                    myButton.option('visible', !e.value); // Hide the button when readOnly: true
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
            <dx-{widget-name} ...
                @option-changed="changeButtonState">
                <dx-{widget-name}-button
                    name="myCustomButton"
                    ...
                />
            </dx-{widget-name}>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import Dx{WidgetName}, {
            DxButton as Dx{WidgetName}Button
        } from 'devextreme-vue/{widget-name}';

        export default {
            components: {
                Dx{WidgetName},
                Dx{WidgetName}Button
            },
            data() {
                return {
                    // ...
                }
            },
            methods: {
                changeButtonState(e) {
                    if(e.name == 'readOnly') {
                        let myButton = e.component.getButton('myCustomButton');
                        myButton.option('visible', !e.value); // Hide the button when readOnly: true
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

        import {WidgetName}, {
            Button as {WidgetName}Button
        } from 'devextreme-react/{widget-name}';

        class App extends React.Component {
            changeButtonState(e) {
                if(e.name == 'readOnly') {
                    let myButton = e.component.getButton('myCustomButton');
                    myButton.option('visible', !e.value); // Hide the button when readOnly: true
                }
            }
            render() {
                return (
                    <{WidgetName} ...
                        onOptionChanged={this.changeButtonState}>
                        <{WidgetName}Button
                            name="myCustomButton"
                            ...
                        />
                    </{WidgetName}>
                );
            }
        }
        export default App;

    ---