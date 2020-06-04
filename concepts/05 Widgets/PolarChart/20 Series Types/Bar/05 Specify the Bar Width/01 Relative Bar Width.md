Regulating the empty space on a bar's sides controls the relative angular bar width. Use the [barPadding](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/5%20Series%20Types/CommonPolarChartSeries/barPadding.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#barPadding') option to specify how much of the available sector should be empty. For example, a **barPadding** of 0.1 leaves 10% of the available sector empty giving the rest to the bar.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#polarChartContainer").dxPolarChart({
            series: [{
                // ...
                barPadding: 0.1 // for an individual series
            }, {
                // ...
            }],
            commonSeriesSettings: {
                // ...
                barPadding: 0.1 // for all series in the chart
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-polar-chart ... >
        <dxi-series
            [barPadding]="0.1"> <!-- for an individual series -->
        </dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings
            [barPadding]="0.1"> <!-- for all series in the chart -->
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

In single-series charts, the available sector equals the interval between two [major ticks](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks'). In multi-series charts, it depends on the number of [bars in the parent group](/concepts/05%20Widgets/PolarChart/20%20Series%20Types/Bar/05%20Specify%20the%20Bar%20Width '/Documentation/Guide/Widgets/PolarChart/Series_Types/#Bar/Specify_the_Bar_Width') and the group's angular width.

The parent group's width can be specified using the [barGroupPadding](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/barGroupPadding.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#barGroupPadding') option. It works like **barPadding**, dividing the available sector between the bar group and an empty space. For example, a **barGroupPadding** of 0.2 leaves 20% of the sector empty. The available sector is the interval between two major ticks. Unlike **barPadding**, which can be specified for each series individually, **barGroupPadding** applies to the whole chart.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#polarChartContainer").dxPolarChart({
            // ...
            barGroupPadding: 0.2
        });
    });

##### Angular

    <!--HTML-->
    <dx-polar-chart ...
        [barGroupPadding]="0.2">
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

The following images illustrate how different **barPadding** and **barGroupPadding** values change a chart's appearance. In this example, all series have the same **barPadding**.

<table class="dx-table">
    <tr>
        <th>barGroupPadding: 0 <br/> barPadding: 0</th>
        <th>barGroupPadding: 0.2 <br/> barPadding: 0</th>
        <th>barGroupPadding: 0.2 <br/> barPadding: 0.1</th>
    </tr>
    <tr>
        <td><img src="/Content/images/doc/20_2/ChartJS/polarbarwidth/1.png" /></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/polarbarwidth/2.png" /></td>
        <td><img src="/Content/images/doc/20_2/ChartJS/polarbarwidth/3.png" /></td>
    </tr>
</table>
