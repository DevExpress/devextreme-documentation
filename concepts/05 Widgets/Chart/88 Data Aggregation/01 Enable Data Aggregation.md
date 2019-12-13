You can enable data aggregation for individual series, all series of a specific type, or for all series in the **Chart**. The following code demonstrates all the three cases:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                // Enables data aggregation for all series in the Chart
                aggregation: {
                    enabled: true
                },
                fullstackedbar: {
                    // Enables data aggregation for all Full-Stacked Bar series
                    aggregation: {
                        enabled: true
                    }
                }
            },
            series: [{
                // Enables data aggregation for an individual series
                aggregation: {
                    enabled: true
                }
            }, {
                // ...
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxo-common-series-settings>
            <!-- Enables data aggregation for all series in the Chart -->
            <dxo-aggregation
                [enabled]="true">
            </dxo-aggregation>

            <dxo-fullstackedbar>
                <!-- Enables data aggregation for all Full-Stacked Bar series -->
                <dxo-aggregation
                    [enabled]="true">
                </dxo-aggregation>
            </dxo-fullstackedbar>

        </dxo-common-series-settings>

        <dxi-series>
            <!-- Enables data aggregation for an individual series -->
            <dxo-aggregation
                [enabled]="true">
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
