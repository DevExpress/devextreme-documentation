You can switch a series point into the hover state and back again by calling its [hover()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/hover().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#hover') and [clearHover()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/clearHover().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#clearHover') method, respectively.

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

---

#####See Also#####
- [Access a Point Using the API](/concepts/05%20Widgets/PieChart/10%20Series/45%20Access%20a%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/')
#include common-link-callmethods
