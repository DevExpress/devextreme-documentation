---
##### shortDescription
Disposes of all the resources allocated to the **{WidgetName}** instance.

---
The following code disposes of an **{WidgetName}** instance that corresponds to the element ID (or reference variable in Angular) and removes the element from the DOM:

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
        @ViewChild("{widgetName}Var") {widgetName}: Dx{WidgetName}Component;

        remove{WidgetName} (e) {
            this.{widgetName}.instance.dispose();
            document.getElementById("my{WidgetName}").remove();
        }
    }

---