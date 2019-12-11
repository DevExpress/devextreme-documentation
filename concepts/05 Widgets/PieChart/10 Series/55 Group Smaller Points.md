Smaller points on the **PieChart** can be collected in a single group in one of the following modes:

- **Top N**     
Top N points with the biggest values remain ungrouped; all other points form a group. The **smallValuesGrouping**.[topCount](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/smallValuesGrouping/topCount.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/smallValuesGrouping/#topCount') option specifies the N.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#pieChartContainer").dxPieChart({
                smallValuesGrouping: {
                    mode: "topN",
                    topCount: 5
                }
            });
        });

    ##### Angular

        <!--HTML-->
        <dx-pie-chart>
            <dxo-small-values-grouping
                mode="topN"
                [topCount]="5">
            </dxo-small-values-grouping>
        </dx-pie-chart>

        <!--TypeScript-->
        import { DxPieChartModule } from "devextreme-angular";
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ---

- **Threshold**         
Points that fall beyond a threshold establish a group. The **smallValuesGrouping**.[threshold](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/smallValuesGrouping/threshold.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/smallValuesGrouping/#threshold') option specifies the threshold.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#pieChartContainer").dxPieChart({
                smallValuesGrouping: {
                    mode: "smallValueThreshold",
                    threshold: 3.5
                }
            });
        });

    ##### Angular

        <!--HTML-->
        <dx-pie-chart>
            <dxo-small-values-grouping
                mode="smallValueThreshold"
                [threshold]="3.5">
            </dxo-small-values-grouping>
        </dx-pie-chart>

        <!--TypeScript-->
        import { DxPieChartModule } from "devextreme-angular";
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ---

The group for small points is called *"others"* by default. You can change this using the **smallValuesGrouping**.[groupName](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/smallValuesGrouping/groupName.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/smallValuesGrouping/#groupName') option.


---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            smallValuesGrouping: {
                // ...
                groupName: "miscellaneous"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart>
        <dxo-small-values-grouping ...
            groupName="miscellaneous">
        </dxo-small-values-grouping>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithSmallValuesGrouped/"
}
