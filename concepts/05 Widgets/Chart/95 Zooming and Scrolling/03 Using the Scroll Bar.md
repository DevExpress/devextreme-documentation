The scrollbar is a chart element used for scrolling.

![DevExtreme HTML5 JavaScript Charts ScrollBar](/images/ChartJS/visual_elements/scroll_bar.png)

You can configure the scrollbar using the [scrollBar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/') object. To display the scrollbar, set this object's [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible') option to **true** after enabling [scrolling](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode') and [zooming](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') in the **Chart**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            zoomingMode: "all",
            scrollingMode: "all",
            scrollBar: {
                visible: true,
                //...
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        zoomingMode="all"
        scrollingMode="all">
        <dxo-scroll-bar [visible]="true" ... ></dxo-scroll-bar>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
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
- [Set the Initial Zoom](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Scrolling/15%20Set%20the%20Initial%20Zoom.md '/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/#Set_the_Initial_Zoom')
