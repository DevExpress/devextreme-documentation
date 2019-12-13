---
id: BaseChart.Options.onTooltipHidden
type: function(e)
default: null
EventForAction: BaseChart.tooltipHidden
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a tooltip becomes hidden.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject | dxChartAnnotationConfig | any
The series point whose tooltip is hidden; described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
#####See Also#####
- [hideTooltip()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/hideTooltip().md '{basewidgetpath}/Methods/#hideTooltip')
- **Point**.[hideTooltip()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/hideTooltip().md '{basewidgetpath}/Chart_Elements/Point/Methods/#hideTooltip')