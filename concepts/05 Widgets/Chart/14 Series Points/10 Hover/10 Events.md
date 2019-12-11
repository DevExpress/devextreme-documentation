When a user pauses on a series point, the **Chart** fires the [pointHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointHoverChanged') event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onPointHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointHoverChanged') option when you configure the widget. To check whether the pointer entered or left a series, call the [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#isHovered') method of the series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (point.isHovered()) {
                    // Commands to execute when the point is hovered over
                } else {
                    // Commands to execute when the point is hovered out
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointHoverChanged (e) {
            let point = e.target;
            if (point.isHovered()) {
                // Commands to execute when the point is hovered over
            } else {
                // Commands to execute when the point is hovered out
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

If you are going to change the event handler at runtime or if you need to attach several handlers to the **pointHoverChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var pointHoverChangedHandler1 = function (e) {
        var point = e.target;
        // First handler of the "pointHoverChanged" event
    };

    var pointHoverChangedHandler2 = function (e) {
        var point = e.target;
        // Second handler of the "pointHoverChanged" event
    };

    $("#chartContainer").dxChart("instance")
        .on("pointHoverChanged", pointHoverChangedHandler1)
        .on("pointHoverChanged", pointHoverChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [Series Hover Events](/concepts/05%20Widgets/Chart/10%20Series/10%20Hover/10%20Events.md '/Documentation/Guide/Widgets/Chart/Series/Hover/#Events')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')
