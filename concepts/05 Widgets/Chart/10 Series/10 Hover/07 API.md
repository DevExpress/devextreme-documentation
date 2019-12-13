You can switch a series into the hover state by calling its [hover()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/hover().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#hover') method, and its [clearHover()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/clearHover().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#clearHover') method to switch it back to the normal state. The same API is available [for series points](/concepts/05%20Widgets/Chart/14%20Series%20Points/10%20Hover/07%20API.md '/Documentation/Guide/Widgets/Chart/Series_Points/Hover/#API'). 

---
##### jQuery

    <!--JavaScript-->
    var toggleSeriesHoverState = function (series) {
        !series.isHovered() ? series.hover() : series.clearHover();        
    }

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        toggleSeriesHoverState (series) {
            !series.isHovered() ? series.hover() : series.clearHover();
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
- [Access a Series Using the API](/concepts/05%20Widgets/Chart/10%20Series/40%20Access%20a%20Series%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/')
#include common-link-callmethods
