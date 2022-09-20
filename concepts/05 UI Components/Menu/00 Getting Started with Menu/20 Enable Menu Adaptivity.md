In adaptive render mode, the Menu is shown as a list icon, and Menu items are arranged hierarchically like [TreeView](/concepts/05%20UI%20Components/TreeView/00%20Getting%20Started%20with%20TreeView '/Documentation/Guide/UI_Components/TreeView/Getting_Started_with_TreeView/') items. This functionality is in effect only if the container's width is less than the Menu width. Set the [adaptivityEnabled](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#adaptivityEnabled') property to **true** to enable adaptive rendering.

In the code below, the [CheckBox](/api-reference/10%20UI%20Components/dxCheckBox '/Documentation/ApiReference/UI_Components/dxCheckBox/') toggles Menu render mode.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const menu = $("#menu").dxMenu({
            // ...
        }).dxMenu('instance');

        $("#checkbox").dxCheckBox({
            text: 'Enable adaptivity',
            onValueChanged: function(e) {
                menu.option('adaptivityEnabled', e.value)
            }
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
        </head>
        <body>
            <div id="container">
                <div id="menu"></div>
            </div>
            <div id="checkbox"></div>
        </body>
    </html>

    <!-- tab: index.css -->
    #container {
        width: 200px;
        height: 140px;
    }

##### Angular

    <!-- tab: app.component.html -->
    <div id="container">
        <dx-menu
            [adaptivityEnabled]="toggle"
        >
            <!-- ... -->
        </dx-menu>
    </div>
    <dx-check-box
        text="Enable adaptivity"
        (onValueChanged)="onValueChanged($event)"
    >
    </dx-check-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })

    export class AppComponent {
        // ...
        toggle: boolean = false;

        onValueChanged(e: any) {
            this.toggle = e.value;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    
    import { DxMenuModule, DxCheckBoxModule } from "devextreme-angular";
    
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxMenuModule,
            DxCheckBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.css -->
    #container {
        width: 200px;
        height: 140px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="container">
            <dxMenu
                :adaptivity-enabled="toggle"
            >
                <!-- ... -->
            </dxMenu>
        </div>
        <dxCheckBox
            text="Enable adaptivity"
            @value-changed="onValueChanged"
        >
        </dxCheckBox>
    </template>

    <script>
        import DxMenu, { DxItem } from 'devextreme-vue/menu';
        import DxCheckBox from 'devextreme-vue/check-box';

        export default {
            components: {
                DxMenu,
                DxItem,
                DxCheckBox
            },
            data() {
                return {
                    toggle: false
                };
            },
            methods: {    
                // ...
                onValueChanged(e) {
                    this.toggle = e.value;
                }
            }
        }
    </script>

    <style>
        #container {
            width: 200px;
            height: 140px;
        }
    </style>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Menu, { Item } from 'devextreme-react/menu';
    import CheckBox from 'devextreme-react/check-box';

    function App() {
        const [toggle, setToggle] = useState(false);

        const onValueChanged = useCallback((e) => {
            setToggle(e.value);
        }, []);

        return (
            <div>
                <div id="container">
                    <Menu
                        adaptivityEnabled={toggle}
                    >
                        <!-- ... -->
                    </Menu>
                </div>
                <CheckBox
                    text="Enable adaptivity"
                    onValueChanged={onValueChanged}
                >
                </CheckBox>
            </div>
        );
    }

    export default App;

---