Aggregation methods specify how series points should be aggregated. DevExtreme provides the most commonly used aggregation methods out of the box. To use one, specify a series' **aggregation**.[method](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation/method.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#method') option. In its description, you will find the full list of provided aggregation methods. Note that different series types have different aggregation methods available.

The following code shows how to specify aggregation methods for each series individually. Data aggregation is [enabled for all series](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation/01%20Enable%20Data%20Aggregation.md '/Documentation/Guide/Widgets/Chart/Data_Aggregation/#Enable_Data_Aggregation') in the **commonSeriesSettings** object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                aggregation: {
                    enabled: true
                }
            },
            series: [{
                // ...
                type: "line",
                aggregation: {
                    method: "min"
                }
            }, {
                // ...
                type: "bar",
                aggregation: {
                    method: "max"
                }
            }]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-common-series-settings ... >
            <dxo-aggregation
                [enabled]="true">
            </dxo-aggregation>
        </dxo-common-series-settings>

        <dxi-series type="line" ... >
            <dxo-aggregation
                method="min">
            </dxo-aggregation>
        </dxi-series>

        <dxi-series type="bar" ... >
            <dxo-aggregation
                method="max">
            </dxo-aggregation>
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregation/"
}

You can implement a custom aggregate function instead of using an out-of-the-box aggregation method.
