When a user selects a series, the **Chart** fires the [seriesSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/seriesSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesSelectionChanged') event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onSeriesSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onSeriesSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesSelectionChanged') option when you configure the widget. To check whether a series was selected or the selection was cleared, call the [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isSelected') method of the series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesSelectionChanged: function (e) {
                var series = e.target;
                if (series.isSelected()) {
                    // Commands to execute when the series is selected
                } else {
                    // Commands to execute when the selection is cleared
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onSeriesSelectionChanged)="onSeriesSelectionChanged($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSeriesSelectionChanged (e) {
            let series = e.target;
            if (series.isSelected()) {
                // Commands to execute when the series is selected
            } else {
                // Commands to execute when the selection is cleared
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

If you are going to change the event handler at runtime or if you need to attach several handlers to the **seriesSelectionChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var seriesSelectionChangedHandler1 = function (e) {
        var series = e.target;
        // First handler of the "seriesSelectionChanged" event
    };

    var seriesSelectionChangedHandler2 = function (e) {
        var series = e.target;
        // Second handler of the "seriesSelectionChanged" event
    };

    $("#chartContainer").dxChart("instance")
        .on("seriesSelectionChanged", seriesSelectionChangedHandler1)
        .on("seriesSelectionChanged", seriesSelectionChangedHandler2);

[note]There are series that consist of points only, for example, [bar](/concepts/05%20Widgets/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/') or [financial](/concepts/05%20Widgets/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/') series. For these series, subscribe to the [pointSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointSelectionChanged') event instead of **seriesSelectionChanged** (see the [Point Selection Events](/concepts/05%20Widgets/Chart/14%20Series%20Points/20%20Selection/10%20Events.md '/Documentation/Guide/Widgets/Chart/Series_Points/Selection/#Events') topic).

#####See Also#####
#include common-link-handleevents
- [Point Selection Events](/concepts/05%20Widgets/Chart/14%20Series%20Points/20%20Selection/10%20Events.md '/Documentation/Guide/Widgets/Chart/Series_Points/Selection/#Events')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')
