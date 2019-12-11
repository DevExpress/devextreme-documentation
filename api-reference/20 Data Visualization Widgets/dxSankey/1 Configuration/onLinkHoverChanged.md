---
EventForAction: ..\4 Events\linkHoverChanged.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A function that is executed after the pointer enters or leaves a sankey link.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): dxSankeyLink
The [Link](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/7%20Link '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Link/') object.

---
#####See Also#####
- **link**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/link/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/hoverStyle/')