Smaller points on the PieChart can be collected in a single group in one of the following modes:

- **Top N**     
Top N points with the biggest values remain ungrouped; all other points form a group. The **smallValuesGrouping**.[topCount](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/smallValuesGrouping/topCount.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/smallValuesGrouping/#topCount') property specifies the N.

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
    
    ##### Vue
    
        <!-- tab: App.vue -->
        <template>
            <DxPieChart ... >
                <DxSmallValuesGrouping
                    mode="topN"
                    :top-count="5"
                />
            </DxPieChart>
        </template>
    
        <script>
        import DxPieChart, {
            DxSmallValuesGrouping
        } from 'devextreme-vue/pie-chart';
    
        export default {
            components: {
                DxPieChart,
                DxSmallValuesGrouping
            },
            // ...
        }
        </script>
    
    ##### React
    
        <!-- tab: App.js -->
        import PieChart, {
            SmallValuesGrouping
        } from 'devextreme-react/pie-chart';
    
        export default function App() {
            return (
                <PieChart ... >
                    <SmallValuesGrouping
                        mode="topN"
                        topCount={5}
                    />
                </PieChart>
            );
        }

    ---

- **Threshold**         
Points that fall beyond a threshold establish a group. The **smallValuesGrouping**.[threshold](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/smallValuesGrouping/threshold.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/smallValuesGrouping/#threshold') property specifies the threshold.

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

    ##### Vue
    
        <!-- tab: App.vue -->
        <template>
            <DxPieChart ... >
                <DxSmallValuesGrouping
                    mode="smallValueThreshold"
                    :threshold="3.5"
                />
            </DxPieChart>
        </template>
    
        <script>
        import DxPieChart, {
            DxSmallValuesGrouping
        } from 'devextreme-vue/pie-chart';
    
        export default {
            components: {
                DxPieChart,
                DxSmallValuesGrouping
            },
            // ...
        }
        </script>
    
    ##### React
    
        <!-- tab: App.js -->
        import PieChart, {
            SmallValuesGrouping
        } from 'devextreme-react/pie-chart';
    
        export default function App() {
            return (
                <PieChart ... >
                    <SmallValuesGrouping
                        mode="smallValueThreshold"
                        threshold={3.5}
                    />
                </PieChart>
            );
        }

    ---

The group for small points is called *"others"* by default. You can change this using the **smallValuesGrouping**.[groupName](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/smallValuesGrouping/groupName.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/smallValuesGrouping/#groupName') property.


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

##### Vue
    
    <!-- tab: App.vue -->
    <template>
        <DxPieChart ... >
            <DxSmallValuesGrouping ...
                group-name="miscellaneous"
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSmallValuesGrouping
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSmallValuesGrouping
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import PieChart, {
        SmallValuesGrouping
    } from 'devextreme-react/pie-chart';

    export default function App() {
        return (
            <PieChart ... >
                <SmallValuesGrouping ...
                    groupName="miscellaneous"
                />
            </PieChart>
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithSmallValuesGrouped/"
}
