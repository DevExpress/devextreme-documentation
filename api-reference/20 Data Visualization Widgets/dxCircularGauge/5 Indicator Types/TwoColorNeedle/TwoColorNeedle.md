---
id: circularTwoColorNeedle
type: Object
inherits: CommonIndicator
---
---
##### shortDescription
An object that defines a gauge indicator of the **twoColorNeedle** type.

##### hidePropertyOf

---
---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#circularGaugeContainer").dxCircularGauge({
            value: 40,
            valueIndicator: { // or subvalueIndicator
                type: "twoColorNeedle",
                // ...
                // The rest of the indicator options go here
                // ...
            }
        });
    });

    <!--HTML-->
    <div id="circularGaugeContainer"></div>

##### Angular  

    <!--HTML-->
    <dx-circular-gauge [value]="40">
        <dxo-value-indicator <!-- or dxo-subvalue-indicator -->
            type="twoColorNeedle"
            <!-- ... -->
            <!-- The rest of the indicator options go here -->
            <!-- ... -->>
        </dxo-value-indicator>
    </dx-circular-gauge>

    <!--TypeScript-->
    import { DxCircularGaugeModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxCircularGaugeModule
        ],
        // ...
    })

##### ASP.NET MVC Controls
    
    <!--Razor C#-->
    @(Html.DevExtreme().CircularGauge()
        .ID("circularGauge")
        .Value(40)
        .ValueIndicator(vi => vi // or .SubvalueIndicator
            .Type(GaugeIndicatorType.TwoColorNeedle)
            // ...
            // The rest of the indicator options go here
            // ...
        )
    )

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentValueIndicatorTypes/"
}