When the **Chart** is rotated, its axes are swapped around.

<img src="/Content/images/doc/19_2/ChartJS/visual_elements/axis_standard.png" alt="DevExtreme HTML5 JavaScript Charts" style="display:inline-block" />
<img src="/Content/images/doc/19_2/ChartJS/visual_elements/axis_rotated.png" alt="DevExtreme HTML5 JavaScript Charts RotatedChart" style="display:inline-block;margin-left:5px" />

To rotate the **Chart**, set the [rotated](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated') option to **true**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            rotated: true
        });
    });

##### Angular

    <!--HTML--><dx-chart ...
        [rotated]="true">
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

Besides being swapped around, chart axes can be inverted, or "mirrored".

<img src="/Content/images/doc/19_2/ChartJS/visual_elements/axis_standard.png" alt="DevExtreme HTML5 JavaScript Charts" style="display:inline-block" />
<img src="/Content/images/doc/19_2/ChartJS/visual_elements/axis_inverted_argument.png" alt="DevExtreme HTML5 JavaScript Charts InvertedArgumentAxis" style="display:inline-block" />
<img src="/Content/images/doc/19_2/ChartJS/visual_elements/axis_inverted_value.png" alt="DevExtreme HTML5 JavaScript Charts InvertedValueAxis" style="display:inline-block;margin-left:5px" />

To invert both argument and value axes, assign **true** to the [inverted](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/inverted.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/#inverted') option of the [commonAxisSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/') object. The same option declared in the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/') or [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/') object inverts a specific axis.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonAxisSettings: {
                inverted: true
            },
            // or for a specific axis
            argumentAxis: {
                inverted: true
            },
            valueAxis: {
                inverted: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-common-axis-settings [inverted]="true"></dxo-common-axis-settings>
        <!-- or for a specific axis -->
        <dxo-argument-axis [inverted]="true"></dxo-argument-axis>
        <dxi-value-axis [inverted]="true"></dxi-value-axis>
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

#####See Also#####
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AjaxRequest)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, rotate, invert, mirror
