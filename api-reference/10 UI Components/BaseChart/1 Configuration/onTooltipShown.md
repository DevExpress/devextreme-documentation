---
id: BaseChart.Options.onTooltipShown
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a tooltip appears.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject | dxChartAnnotationConfig | any
The series point whose tooltip is shown; described in the [Point](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
#####See Also#####
- **Point**.[showTooltip()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/3%20Methods/showTooltip().md '{basewidgetpath}/Chart_Elements/Point/Methods/#showTooltip')