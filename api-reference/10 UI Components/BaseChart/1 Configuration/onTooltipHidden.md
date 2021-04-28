---
id: BaseChart.Options.onTooltipHidden
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a tooltip becomes hidden.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject | dxChartAnnotationConfig | any
The series point whose tooltip is hidden; described in the [Point](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
#####See Also#####
- [hideTooltip()](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/hideTooltip().md '{basewidgetpath}/Methods/#hideTooltip')
- **Point**.[hideTooltip()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/3%20Methods/hideTooltip().md '{basewidgetpath}/Chart_Elements/Point/Methods/#hideTooltip')