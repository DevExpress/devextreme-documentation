The scrollbar is a chart element used for panning.

![DevExtreme HTML5 JavaScript Charts ScrollBar](/images/ChartJS/visual_elements/scroll_bar.png)

You can configure the scrollbar using the [scrollBar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/') object. To display the scrollbar, set this object's [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible') option to **true** after [enabling zooming and panning](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Panning/01%20Using%20Mouse%20Commands%20or%20Touch%20Gestures.md '/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/#Using_Mouse_Commands_or_Touch_Gestures').

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            zoomAndPan: {
                argumentAxis: "both",
                valueAxis: "both"
            },
            scrollBar: {
                visible: true,
                //...
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-zoom-and-pan
            argumentAxis="both"
            valueAxis="both">
        </dxo-zoom-and-pan>
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}

Users cannot zoom or scroll the chart out of the whole range. Refer to the [Visual and Whole Ranges](/concepts/05%20Widgets/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/') article for more information.

#####See Also#####
- [Set the Initial Zoom](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Panning/15%20Set%20the%20Initial%20Zoom.md '/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/#Set_the_Initial_Zoom')
