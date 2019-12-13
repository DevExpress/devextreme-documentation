The **Sankey** widget has an adaptive layout that enables the widget to hide optional elements if they do not fit in the container. To configure the adaptive layout, use the [adaptiveLayout](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/adaptiveLayout '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/adaptiveLayout/') object. Set its **height** and **width** fields to specify the minimum container size at which the layout retains all its elements.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            adaptiveLayout: {
                height: 300,
                width: 400
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ... >
        <dxo-adaptive-layout [height]="300" [width]="400"></dxo-adaptive-layout>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

[note]

The layout does not automatically adapt if the widget's container is resized at runtime. If you enable a user to resize the container, call the [render()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/render().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#render') method each time it is resized to rerender the **Sankey**.

---
##### jQuery

    <!--JavaScript-->
    $("#sankeyContainer").dxSankey("render");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxSankeyModule, DxSankeyComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxSankeyComponent, { static: false }) sankey: DxSankeyComponent;
        // Prior to Angular 8
        // @ViewChild(DxSankeyComponent) sankey: DxSankeyComponent;
        renderSankey() {
            this.sankey.instance.render();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

[/note]
