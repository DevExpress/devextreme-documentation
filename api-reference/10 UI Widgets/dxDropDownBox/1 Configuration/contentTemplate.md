---
id: dxDropDownBox.Options.contentTemplate
type: template
default: 'content'
---
---
##### shortDescription
Specifies a custom template for the drop-down content.

##### param(templateData): Object
Data associated with the widget.

##### field(templateData.component): dxDropDownBox
The widget's instance.

##### field(templateData.value): any
The currently selected value.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "widget content" }

##### return: String | Element | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/"
}

#####See Also#####
- [DropDownBox - Overview](/concepts/05%20Widgets/DropDownBox/10%20Overview.md '/Documentation/Guide/Widgets/DropDownBox/Overview/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')