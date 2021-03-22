A series point's style changes when a user hovers the mouse pointer over it.  The **series**.[hoverStyle](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/hoverStyle '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/hoverStyle/') object specifies this style.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            series: {
                hoverStyle: {
                    // ...
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart>
        <dxi-series>
            <dxo-hover-style>
                <!-- ... -->
            </dxo-hover-style>
        </dxi-series>
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
            <DxSeries>
                <DxHoverStyle>
                    <!-- ... -->
                </DxHoverStyle>
            </DxSeries>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries,
        DxHoverStyle
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries,
            DxHoverStyle
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series,
        HoverStyle
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Series>
                        <HoverStyle>
                            {/* ... */}
                        </HoverStyle>
                    </Series>
                </PieChart>
            );
        }
    }

---

You can disable this feature by assigning *"none"* to the **series**.[hoverMode](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/hoverMode.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#hoverMode') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            series: {
                hoverMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart>
        <dxi-series
            hoverMode="none">
        </dxi-series>
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
            <DxSeries ...
                hover-mode="none"
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Series ...
                        hoverMode="none"
                    />
                </PieChart>
            );
        }
    }

---
