---
id: dxDropDownList.Options.groupTemplate
type: template
default: 'group'
---
---
##### shortDescription
Specifies a custom template for group captions.

##### param(itemData): Object
The group's data.

##### param(itemIndex): Number
The group's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "group" }

##### return: String | Element | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/GroupedItems/"
}

#####See Also#####
- [Customize Group Headers](/concepts/05%20Widgets/SelectBox/07%20Grouping/05%20Customize%20Group%20Headers.md '/Documentation/Guide/Widgets/{WidgetName}/Grouping/Customize_Group_Headers/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')