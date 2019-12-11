---
default: undefined
acceptValues: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
type: Number | Object | String
inherits: ..\..\..\..\VizTimeInterval\VizTimeInterval.md
---
---
##### shortDescription
Specifies the interval between [major ticks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/tick/'). Does not apply to [discrete axes](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type').

---
If the axis displays numbers, set the **tickInterval** to a number. This number should fall into a range of 0 to 1 for a full-stacked series. For example, a **tickInterval** of 0.2 places a tick every 20%. If the axis displays date-time values, set the **tickInterval** to an accepted string value or object that contains one of the fields described in this section, for example:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                // ...
                tickInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-value-axis ... >
            <dxo-tick-interval [days]="5"></dxo-tick-interval>
        </dxi-value-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
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

When you use a *"logarithmic"* [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type') axis, ticks are generated as an exponentiation. For example, assuming that the [logarithm base](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/logarithmBase.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#logarithmBase') is 10 and the tick interval is 1, ticks are generated at 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, 10<sup>3</sup>, etc. If the tick interval is 2, ticks are generated at 10<sup>-1</sup>, 10<sup>1</sup>, 10<sup>3</sup>, etc.

When using the widget as an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), you can specify this option with the `VizTimeInterval` enum which accepts the same predefined values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- **valueAxis**.[tick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/tick/')
- **valueAxis**.[minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/minorTickInterval '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTickInterval/')