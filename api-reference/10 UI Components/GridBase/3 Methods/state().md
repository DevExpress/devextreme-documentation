---
id: GridBase.state()
---
---
##### shortDescription
Gets the current UI component state.

##### return: Object
The current UI component state.

---
The following example shows how to save the UI component state in the local storage and load it from there:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        const {widgetName} = $("#{widgetName}Container").dx{WidgetName}({ 
            // ...
        }).dx{WidgetName}("instance");
        $("#save").dxButton({
            text: "Save State",
            onClick: function() {
                const state = {widgetName}.state();
                // Saves the state in the local storage
                localStorage.setItem("{widgetName}State", JSON.stringify(state));
            }
        });
        $("#load").dxButton({
            text: "Load State",
            onClick: function() {
                const state = JSON.parse(localStorage.getItem("{widgetName}State"));
                {widgetName}.state(state);
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Component, ViewChild } from "@angular/core";
    import { 
        Dx{WidgetName}Module, 
        DxButtonModule, 
        Dx{WidgetName}Component 
    } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(Dx{WidgetName}Component, { static: false }) {widgetName}: Dx{WidgetName}Component
        // Prior to Angular 8
        // @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component
        saveState() {
            const state = this.{widgetName}.instance.state();
            // Saves the state in the local storage
            localStorage.setItem("{widgetName}State", JSON.stringify(state));
        }
        loadState() {
            const state = JSON.parse(localStorage.getItem("{widgetName}State"));
            this.{widgetName}.instance.state(state);
        }
    }
    @NgModule({
        imports: [
            Dx{WidgetName}Module,
            DxButtonModule,
            // ...
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...>
    </dx-{widget-name}>
    <dx-button
        text="Save State"
        (onClick)="saveState()">
    </dx-button>
    <dx-button
        text="Load State"
        (onClick)="loadState()">
    </dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :ref="{widgetName}RefKey">
        </Dx{WidgetName}>
        <DxButton
            text="Save State"
            @click="saveState"
        />
        <DxButton
            text="Load State"
            @click="loadState"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        // ...
    } from 'devextreme-vue/{widget-name}';
    import DxButton from 'devextreme-vue/button';

    const {widgetName}RefKey = "my-{widget-name}";

    export default {
        components: {
            Dx{WidgetName},
            // ...
            DxButton
        },
        data() {
            return {
                {widgetName}RefKey
            }
        },
        methods: {
            saveState() {
                const state = this.{widgetName}.state();
                // Saves the state in the local storage
                localStorage.setItem("{widgetName}State", JSON.stringify(state));
            },
            loadState() {
                const state = JSON.parse(localStorage.getItem("{widgetName}State"));
                this.{widgetName}.state(state);
            }
        },
        computed: {
            {widgetName}: function() {
                return this.$refs[{widgetName}RefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        // ...
    } from 'devextreme-react/{widget-name}';
    import Button from 'devextreme-react/button';

    export default function App() {
        const {widgetName} = useRef(null);
        const saveState = () => {
            const state = {widgetName}.current.instance().state();
            // Saves the state in the local storage
            localStorage.setItem("{widgetName}State", JSON.stringify(state));
        };
        const loadState = () => {
            const state = JSON.parse(localStorage.getItem("{widgetName}State"));
            {widgetName}.current.instance().state(state);
        };
        return (
            <React.Fragment>
                <{WidgetName} ...
                    ref={{widgetName}}>
                </{WidgetName}>
                <Button
                    text="Save State"
                    onClick={saveState}
                />
                <Button
                    text="Load State"
                    onClick={loadState}
                />
            </React.Fragment>
        );
    }

---

#####See Also#####
#include common-link-callmethods
- [stateStoring](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring '{basewidgetpath}/Configuration/stateStoring/')
