---
EventForAction: ..\4 Events\tooltipShown.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A function that is executed when a tooltip appears.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject
The series point whose tooltip is shown; described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
#####See Also#####
- **Point**.[showTooltip()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/showTooltip().md '{basewidgetpath}/Chart_Elements/Point/Methods/#showTooltip')