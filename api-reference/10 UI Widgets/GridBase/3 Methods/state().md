---
id: GridBase.state()
---
---
##### shortDescription
Gets the current widget state.

##### return: Object
The current widget state.

---
The following example shows how to save the widget state in the local storage and load it from there:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        var {widgetName} = $("#{widgetName}Container").dx{WidgetName}({ 
            // ...
        }).dx{WidgetName};
        $("#save").dxButton({
            text: "Save State",
            onClick: function() {
                var state = {widgetName}.state();
                // Saves the state in the local storage
                localStorage.setItem("{widgetName}State", JSON.stringify(state));
            }
        });
        $("#load").dxButton({
            text: "Load State",
            onClick: function() {
                let state = JSON.parse(localStorage.getItem("{widgetName}State"));
                {widgetName}.state(state);
            }
        });
    });

#####Angular

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
            let state = this.{widgetName}.instance.state();
            // Saves the state in the local storage
            localStorage.setItem("{widgetName}State", JSON.stringify(state));
        }
        loadState() {
            let state = JSON.parse(localStorage.getItem("{widgetName}State"));
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

---

#####See Also#####
#include common-link-callmethods
- [stateStoring](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/stateStoring '{basewidgetpath}/Configuration/stateStoring/')