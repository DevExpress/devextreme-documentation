---
id: BaseChart.Options.tooltip.contentTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies custom markup for tooltips.

##### param(pointInfo): Object
Series point data.

##### param(element): DxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/APIDisplayATooltip/",
    name: "Display a Tooltip"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/TooltipHTMLSupport/",
    name: "Tooltip HTML Support"
}

#####See Also#####
- [Value Formatting](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/')
