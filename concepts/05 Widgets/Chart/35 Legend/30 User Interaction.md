A user can interact with the legend by pausing on legend items. When a user does this, the series that corresponds to the legend item being paused on becomes highlighted. To disable this capability, set the [hoverMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/legend/hoverMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#hoverMode') option to *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                hoverMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart>
        <dxo-legend hoverMode="none"></dxo-legend>
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

Series that consist of several elements rather than just series points ([Range Area](/concepts/05%20Widgets/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/'), all [line](/concepts/05%20Widgets/Chart/11%20Series%20Types/10%20Line%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Line_Series/') and [area](/concepts/05%20Widgets/Chart/11%20Series%20Types/30%20Area%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Area_Series/') series) can be highlighted _without_ the series points. For this, set the **hoverMode** option to *"excludePoints"*. For other series, this setting has the same effect as *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                hoverMode: "excludePoints"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart>
        <dxo-legend hoverMode="excludePoints"></dxo-legend>
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

Pausing on a legend item causes the [seriesHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/seriesHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesHoverChanged') event to raise. Refer to the [Series Hover Events](/concepts/05%20Widgets/Chart/10%20Series/10%20Hover/10%20Events.md '/Documentation/Guide/Widgets/Chart/Series/Hover/#Events') topic for details on handling this event.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/"
}

In addition, a user can click legend items. By default, the widget does not react to a click, but you can instruct it to by handling the [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#legendClick') event. If the handling function is not going to be changed at runtime, assign it to the [onLegendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onLegendClick') option when you configure the widget. Otherwise, or if you need several handlers for the **legendClick** event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onLegendClick: function (e) {
                var series = e.target;
                // Event handling commands go here
            }
        });

        // ===== or =====
        var legendClickEventHandler1 = function (e) {
            var series = e.target;
            // First handler of the "legendClick" event
        };

        var legendClickEventHandler2 = function (e) {
            var series = e.target;
            // Second handler of the "legendClick" event
        };

        $("#chartContainer").dxChart("instance")
            .on("legendClick", legendClickEventHandler1)
            .on("legendClick", legendClickEventHandler2);
    });

##### Angular

    <!--HTML--><dx-chart
        (onLegendClick)="onLegendClick($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onLegendClick (e) {
            let series = e.target;
            // Event handling commands go here
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
#include common-link-handleevents
- [Relocate the Legend](/concepts/05%20Widgets/Chart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/Widgets/Chart/Legend/Relocate_the_Legend/')
- [Rearrange Legend Items](/concepts/05%20Widgets/Chart/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/Widgets/Chart/Legend/Rearrange_Legend_Items/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, legend, hover, hoverMode, legend click, onLegendClick
