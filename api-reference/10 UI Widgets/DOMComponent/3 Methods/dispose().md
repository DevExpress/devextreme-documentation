---
id: DOMComponent.dispose()
---
---
##### shortDescription
Disposes of all the resources allocated to the **{WidgetName}** instance.

---
After calling this method, remove the DOM element associated with the widget:

---
##### jQuery

    <!--JavaScript-->
    $("#my{WidgetName}").dx{WidgetName}("dispose");
    $("#my{WidgetName}").remove();

##### Angular

    <!--HTML-->
    <dx-{widget-name} #{widgetName}Var id="my{WidgetName}"></dx-{widget-name}>

<!---->

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { Dx{WidgetName}Component } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild("{widgetName}Var", { static: false }) {widgetName}: Dx{WidgetName}Component;
        // Prior to Angular 8
        // @ViewChild("{widgetName}Var") {widgetName}: Dx{WidgetName}Component;

        remove{WidgetName} (e) {
            this.{widgetName}.instance.dispose();
            document.getElementById("my{WidgetName}").remove();
        }
    }

---
