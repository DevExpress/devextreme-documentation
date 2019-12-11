Mouse-equipped users zoom the chart by rotating the mouse wheel and scroll it by dragging the chart's plot. Users with touch-enabled devices zoom the chart using the spread and pinch gestures, and scroll the chart using the drag gesture.

![DevExtreme HTML5 JavaScript Charts Zooming Scrolling](/images/ChartJS/devextreme-chart-NewZoomScroll.gif)

Zooming and scrolling are configured separately as well as their support for mouse commands and touch gestures. Use the [zoomingMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') and [scrollingMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode') options to specify whether a user can zoom and scroll the chart using mouse commands, touch gestures, or both. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            zoomingMode: "all",  // or "touch" | "mouse" | "none"
            scrollingMode: "all" // or "touch" | "mouse" | "none"
        });
    });

##### Angular

    <!--HTML--><dx-chart
        zoomingMode="all"
        scrollingMode="all"> <!-- or "touch" | "mouse" | "none" -->
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/jQuery/Light/"
}

#####See Also#####
- [Set the Initial Zoom](/concepts/05%20Widgets/Chart/92%20Zooming%20and%20Scrolling/15%20Set%20the%20Initial%20Zoom.md '/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/#Set_the_Initial_Zoom')
