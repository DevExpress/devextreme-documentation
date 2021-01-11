When a user selects a series point, its style changes to the one specified by the **series**.[selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/selectionStyle/') object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                selectionStyle: {
                    // ...
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart>
        <dxi-series>
            <dxo-selection-style>
                <!-- ...-->
            </dxo-selection-style>
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
                <DxSelectionStyle>
                    <!-- ... -->
                </DxSelectionStyle>
            </DxSeries>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries,
        DxSelectionStyle
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries,
            DxSelectionStyle
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series,
        SelectionStyle
    } from 'devextreme-react/pie-chart';

    const App = () => {
        return (
            <PieChart ... >
                <Series>
                    <SelectionStyle>
                        {/* ... */}
                    </SelectionStyle>
                </Series>
            </PieChart>
        );
    };

    export default App;

---

You can disable the selection capability by settings the **series**.[selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#selectionMode') property to *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            series: {
                selectionMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart>
        <dxi-series
            selectionMode="none">
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
            <DxSeries selection-mode="none" />
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

    const App = () => {
        return (
            <PieChart ... >
                <Series selectionMode="none" />
            </PieChart>
        );
    };

    export default App;

---

Only a single point can be in the selected state at a time by default. If you need to allow multiple points to be in this state, assign *"multiple"* to the [pointSelectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/pointSelectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#pointSelectionMode') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            pointSelectionMode: 'multiple' // or 'single'
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart 
        pointSelectionMode="multiple"> <!-- or 'single' -->
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
        <DxPieChart
            point-selection-mode="multiple"> <!-- or 'single' -->
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

    const App = () => {
        return (
            <PieChart
                pointSelectionMode="multiple"> {/* or 'single' */}
            </PieChart>
        );
    };

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/DoughnutSelection/"
}
