---
id: dxChart.Options.onTooltipShown
type: function(e)
---
---
##### shortDescription
A function that is executed when a tooltip appears.

##### param(e): viz/chart:TooltipShownEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject | dxChartAnnotationConfig | any
The series point whose tooltip is shown; described in the [Point](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
<!-- Description goes here -->