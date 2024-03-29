In multi-series charts, point labels often overlap. To decide how to resolve overlapping, specify the [resolveLabelOverlapping](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/resolveLabelOverlapping.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#resolveLabelOverlapping') property. It allows you to hide certain labels, or slightly shift them, or keep them as they are (i.e. overlapping).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            resolveLabelOverlapping: 'shift' // or 'hide' | 'none'
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart ...
        resolveLabelOverlapping="shift"> <!-- or 'hide' | 'none' -->
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
        <DxPieChart ...
            resolve-label-overlapping="shift"> <!-- or 'hide' | 'none' -->
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...
                    resolveLabelOverlapping="shift"> {/* or 'hide' | 'none' */}
                </PieChart>
            );
        }
    }

---

Another way to deal with overlapping labels is to hide all labels of a specific series once their count exceeds a certain limit. Mostly, this feature is useful if the series accepts new points at runtime. To specify the limit on point labels, assign a number to the [maxLabelCount](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/maxLabelCount.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#maxLabelCount') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: [{
                // ...
                maxLabelCount: 10
            }, {
                // ...
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart ... >
        <dxi-series [maxLabelCount]="10" ... ></dxi-series>
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
                :max-label-count="10"
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
                        maxLabelCount={10}
                    />
                </PieChart>
            );
        }
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithResolvedLabelOverlapping/"
}

#####See Also#####
- [Adaptive Layout](/concepts/05%20UI%20Components/PieChart/89%20Adaptive%20Layout.md '/Documentation/Guide/UI_Components/PieChart/Adaptive_Layout/')
- [Relocate Labels](/concepts/05%20UI%20Components/PieChart/15%20Point%20Labels/07%20Relocate%20Labels.md '/Documentation/Guide/UI_Components/PieChart/Point_Labels/Relocate_Labels/')
- [Equally-Sized Pies](/concepts/05%20UI%20Components/PieChart/95%20Equally-Sized%20Pies.md '/Documentation/Guide/UI_Components/PieChart/Equally-Sized_Pies/')