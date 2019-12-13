With the ever-growing variety of platforms, today's web sites and applications cannot stay competitive without being adaptive. Supporting this modern standard, the **Chart** widget possesses an adaptive layout. This enables the **Chart** to hide its accessory elements if the container is not large enough to fit them. To configure the adaptive layout, use the [adaptiveLayout](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/adaptiveLayout '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/adaptiveLayout/') object. Set its **height** and **width** fields to specify the minimum container size at which the layout retains all its elements.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            adaptiveLayout: {
                height: 300,
                width: 400
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-adaptive-layout [height]="300" [width]="400"></dxo-adaptive-layout>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

<a href="https://jsfiddle.net/ChartJS/2m1pv4ag/" class="button orange small fix-width-155" target="_blank">View Demo on JSFiddle</a>

[note]

The layout does not automatically adapt to changes made in the widget's container at runtime. Therefore, if you enable a user to resize the container, call the [render()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/render().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#render') method after each resizing to render the **Chart** in the new size.

---
##### jQuery

    <!--JavaScript-->$("#chartContainer").dxChart("render");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxChartComponent) chart: DxChartComponent;
        renderChart () {
            this.chart.instance.render();
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

[/note]

#####See Also#####
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, adaptive layout, responsive layout, adaptiveLayout, render
