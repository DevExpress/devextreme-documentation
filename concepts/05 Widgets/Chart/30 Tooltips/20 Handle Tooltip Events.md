When a tooltip becomes shown or hidden, the **Chart** fires the [tooltipShown](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/tooltipShown.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#tooltipShown') or [tooltipHidden](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/tooltipHidden.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#tooltipHidden') event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onTooltipShown](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onTooltipShown.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onTooltipShown') or [onTooltipHidden](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onTooltipHidden.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onTooltipHidden') option respectively, when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onTooltipShown: function (e) {
                var point = e.target;
                // Handler of the "tooltipShown" event
            },
            onTooltipHidden: function (e) {
                var point = e.target;
                // Handler of the "tooltipHidden" event
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        (onTooltipShown)="onTooltipShown($event)"
        (onTooltipHidden)="onTooltipHidden($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onTooltipShown (e) {
            let point = e.target;
            // Handler of the "tooltipShown" event
        }
        onTooltipHidden (e) {
            let point = e.target;
            // Handler of the "tooltipHidden" event
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

If you are going to change the event handlers at runtime or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler') method.  This approach is more typical of jQuery.

    <!--JavaScript-->
    var tooltipShownHandler1 = function (e) {
        var point = e.target;
        // First handler of the "tooltipShown" event
    };

    var tooltipShownHandler2 = function (e) {
        var point = e.target;
        // Second handler of the "tooltipShown" event
    };

    $("#chartContainer").dxChart("instance")
        .on("tooltipShown", tooltipShownHandler1)
        .on("tooltipShown", tooltipShownHandler2);

#####See Also#####
#include common-link-handleevents
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, tooltip, handle events, tooltipShown, tooltipHidden
