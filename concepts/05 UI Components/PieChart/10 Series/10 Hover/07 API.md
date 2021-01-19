You can switch a series point into the hover state and back again by calling its [hover()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/hover().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#hover') and [clearHover()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/clearHover().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#clearHover') method, respectively.

---
##### jQuery

    <!--JavaScript-->
    var togglePointHoverState = function (point) {
        !point.isHovered() ? point.hover() : point.clearHover();        
    }

##### Angular

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        toggleSeriesHoverState (point) {
            !point.isHovered() ? point.hover() : point.clearHover();
        }
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
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        methods: {
            toggleSeriesHoverState(point) {
                !point.isHovered() ? point.hover() : point.clearHover();
            }
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
                <PieChart ... >
                </PieChart>
            );
        }  
    }

    function toggleSeriesHoverState(point) {
        !point.isHovered() ? point.hover() : point.clearHover();
    }

---

#####See Also#####
- [Access a Point Using the API](/concepts/05%20Widgets/PieChart/10%20Series/45%20Access%20a%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/')
#include common-link-callmethods
