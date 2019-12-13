---
id: dxChart.Options.onLegendClick
type: function(e) | String
default: null
EventForAction: dxChart.legendClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [legend item](/concepts/05%20Widgets/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Legend/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): chartSeriesObject
The series that corresponds to the clicked legend item; described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') section.

---
[note]

The [onSeriesClick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesClick') function is executed after this function. The following code shows how to prevent this: 

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#chartContainer").dxChart({
            // ...
            onLegendClick: function (e) {
                e.event.cancel = true;
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        chart_onLegendClick (e) {
            e.event.cancel = true;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

    <!--HTML--><dx-chart ...
        (onLegendClick)="chart_onLegendClick($event)">
    </dx-chart>

---

[/note]

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Selection/"
}