The [barWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/barWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#barWidth') option specifies fixed angular bar width in degrees. This option is available for each series.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#polarChartContainer").dxPolarChart({
            series: [{
                // ...
                barWidth: 20 // for an individual series
            }, {
                // ...
            }],
            commonSeriesSettings: {
                // ...
                barWidth: 20 // for all series in the chart
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-polar-chart ... >
        <dxi-series
            [barWidth]="20"> <!-- for an individual series -->
        </dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings
            [barWidth]="20"> <!-- for all series in the chart -->
        </dxo-common-series-settings>
    </dx-polar-chart>

    <!--TypeScript-->
    import { DxPolarChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPolarChartModule
        ],
        // ...
    })

---

A bar's maximum angular width is limited. In single-series charts, it cannot be greater than the interval between two [major ticks](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks'). In multi-series charts, it depends on the number of [bars in the parent group](/concepts/05%20Widgets/PolarChart/20%20Series%20Types/Bar/05%20Specify%20the%20Bar%20Width '/Documentation/Guide/Widgets/PolarChart/Series_Types/#Bar/Specify_the_Bar_Width') and this group's actual angular width. 

Bar groups' angular width can be changed using the [barGroupWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/barGroupWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#barGroupWidth') option. Like **barWidth**, it accepts values ​​in degrees, but unlike it, applies to the entire chart. The groups' maximum angular width is the interval between two major ticks.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#polarChartContainer").dxPolarChart({
            // ...
            barGroupWidth: 45
        });
    });

##### Angular

    <!--HTML-->
    <dx-polar-chart ...
        [barGroupWidth]="45">
        <!-- ... -->
    </dx-polar-chart>

    <!--TypeScript-->
    import { DxPolarChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPolarChartModule
        ],
        // ...
    })

---
