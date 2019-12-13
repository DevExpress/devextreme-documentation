---
id: dxChart.Options.valueAxis.minorTickInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the interval between [minor ticks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/'). Applies only to [continuous axes](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type').

---
If the axis displays numbers, set the **minorTickInterval** to a number. This number should fall into a range of 0 to 1 for a full-stacked series. For example, a **minorTickInterval** of 0.05 places a minor tick every 5%. If the axis displays date-time values, set the **minorTickInterval** to an accepted string value or an object that contains one of the fields described in this section, for example:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                // ...
                minorTickInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-value-axis ... >
            <dxo-minor-tick-interval [days]="5"></dxo-minor-tick-interval>
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

When using the widget as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, you can specify this option with the `VizTimeInterval` enum which accepts the same predefined values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- **valueAxis**.[minorTickCount](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/minorTickCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#minorTickCount')
- **valueAxis**.[minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/')
- **valueAxis**.[tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/')