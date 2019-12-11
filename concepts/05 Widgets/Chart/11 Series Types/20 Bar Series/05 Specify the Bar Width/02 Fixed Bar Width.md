
The [barWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/barWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#barWidth') option specifies fixed bar width in pixels. This option is available for each series.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                // ...
                barWidth: 50 // for an individual series
            }, {
                // ...
            }],
            commonSeriesSettings: {
                // ...
                barWidth: 50 // for all series in the chart
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series
            [barWidth]="50"> <!-- for an individual series -->
        </dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings
            [barWidth]="50"> <!-- for all series in the chart -->
        </dxo-common-series-settings>
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

A bar's maximum width is limited. In single-series charts, it cannot be greater than the interval between two [major ticks](/concepts/05%20Widgets/Chart/20%20Axes/07%20Axis%20Ticks.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/'). In multi-series charts, it depends on the number of [bars in the parent group](/concepts/05%20Widgets/Chart/11%20Series%20Types/20%20Bar%20Series/05%20Specify%20the%20Bar%20Width '/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width') and this group's actual width. 

Bar groups' width can be changed using the [barGroupWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/barGroupWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#barGroupWidth') option. Like **barWidth**, it accepts values ​​in degrees, but unlike it, applies to the entire chart. The groups' maximum width is the interval between two major ticks.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            // ...
            barGroupWidth: 250
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ...
        [barGroupWidth]="250">
        <!-- ... -->
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