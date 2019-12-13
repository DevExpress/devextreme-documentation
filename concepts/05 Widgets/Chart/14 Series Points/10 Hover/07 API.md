You can switch a point into the hover state by calling its [hover()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/hover().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#hover') method, and its [clearHover()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/clearHover().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#clearHover') method to switch it back to the normal state. The same API is available [for series](/concepts/05%20Widgets/Chart/10%20Series/10%20Hover/07%20API.md '/Documentation/Guide/Widgets/Chart/Series/Hover/#API'). 

---
##### jQuery

    <!--JavaScript-->
    var togglePointHoverState = function (point) {
        !point.isHovered() ? point.hover() : point.clearHover();        
    }

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        togglePointHoverState (point) {
            !point.isHovered() ? point.hover() : point.clearHover();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#####See Also#####
- [Access a Series Point Using the API](/concepts/05%20Widgets/Chart/14%20Series%20Points/25%20Access%20a%20Series%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/')
#include common-link-callmethods
