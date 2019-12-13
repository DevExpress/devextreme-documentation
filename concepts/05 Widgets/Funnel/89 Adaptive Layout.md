With the ever-growing variety of platforms, today's web sites and applications cannot stay competitive without being adaptive. Supporting this modern standard, the **Funnel** widget possesses an adaptive layout. This enables the **Funnel** to hide its accessory elements if the container is not large enough to fit them. To configure the adaptive layout, use the [adaptiveLayout](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/adaptiveLayout '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/adaptiveLayout/') object. Set its **height** and **width** fields to specify the minimum container size at which the layout retains all its elements.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            adaptiveLayout: {
                height: 300,
                width: 400
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-adaptive-layout [height]="300" [width]="400"></dxo-adaptive-layout>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

<a href="https://jsfiddle.net/ChartJS/j1v235o8/" class="button orange small fix-width-155" target="_blank">View Demo on JSFiddle</a>

[note]

The layout does not automatically adapt to changes made in the widget's container at runtime. Therefore, if you enable a user to resize the container, call the [render()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/render().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#render') method after each resizing to render the **Funnel** in the new size.

---
##### jQuery

    <!--JavaScript-->$("#funnelContainer").dxFunnel("render");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxFunnelModule, DxFunnelComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxFunnelComponent, { static: false }) funnel: DxFunnelComponent;
        // Prior to Angular 8
        // @ViewChild(DxFunnelComponent) funnel: DxFunnelComponent;
        renderFunnel () {
            this.funnel.instance.render();
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

[/note]

#####See Also#####
- [Funnel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart)
