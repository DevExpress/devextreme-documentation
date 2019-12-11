A multi-axis chart adds extra meanings to visualized data in comparison to a single-axis chart. For example, in a single-axis chart, you have to choose which values to indicate - absolute or percentage. With a multi-axis chart, you are free to indicate both absolute and percentage values on two separate axis.

![DevExtreme HTML5 JavaScript Charts MultipleValueAxes](/images/ChartJS/visual_elements/value_axis_multiple.png)

To configure a multi-axis chart, follow the steps below.

1. **Create and name the value axes**         
Declare several objects in the [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/') array. Each object configures a single value axis. Then, give each value axis a unique [name](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/name.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#name').

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                valueAxis: [{
                    name: 'absoluteAxis'
                }, {
                    name: 'percentageAxis'
                }]
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            <dxi-value-axis name="absoluteAxis"></dxi-value-axis>
            <dxi-value-axis name="percentageAxis"></dxi-value-axis>
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

2. **Bind series to value axes**        
Bind each series to a value axis using the [axis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/axis.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#axis') option. If the **axis** option is missing from the series configuration, such a series will be bound to the axis declared first in the **valueAxis** array.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                series: [{
                    axis: 'percentageAxis'
                }, {
                    axis: 'percentageAxis'
                }, {
                    // This series will be automatically bound to the 'absoluteAxis'
                }]
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            ...
            <dxi-series axis="percentageAxis"></dxi-series>
            <dxi-series axis="percentageAxis"></dxi-series>
            <dxi-series>
                <!-- This series will be automatically bound to the 'absoluteAxis' -->
            </dxi-series>
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

All value axes in the **Chart** are synchronized by default, but you can explicitly specify the value at which one axis should be synchronized with others. For this purpose, set the [synchronizedValue](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/synchronizedValue.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#synchronizedValue') option. In addition, you can add more space between two side-by-side axes using the [multipleAxesSpacing](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/multipleAxesSpacing.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#multipleAxesSpacing') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: [{
                name: 'absoluteAxis',
                synchronizedValue: 0
            }, {
                name: 'percentageAxis',
                synchronizedValue: 0,
                multipleAxesSpacing: 10
            }]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        ...
        <dxi-value-axis
            name="absoluteAxis"
            [synchronizedValue]="0">
        </dxi-value-axis>
        <dxi-value-axis
            name="percentageAxis"
            [synchronizedValue]="0"
            [multipleAxesSpacing]="10">
        </dxi-value-axis>
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleAxes/"
}

#####See Also#####
- [Multi-Pane Chart](/concepts/05%20Widgets/Chart/40%20Panes/10%20Multi-Pane%20Chart.md '/Documentation/Guide/Widgets/Chart/Panes/Multi-Pane_Chart/')
- [Limit and Relocate the Axes](/concepts/05%20Widgets/Chart/20%20Axes/40%20Limit%20and%20Relocate%20the%20Axes.md '/Documentation/Guide/Widgets/Chart/Axes/Limit_and_Relocate_the_Axes/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, multiple value axes, synchronize axes, synchronizedValue, multipleAxesSpacing
