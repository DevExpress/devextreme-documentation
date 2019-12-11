---
default: null
type: template
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
The widget's content. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### return: String|Node|jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/"
}

#####See Also#####
- [DropDownBox - Overview](/concepts/05%20Widgets/DropDownBox/10%20Overview.md '/Documentation/Guide/Widgets/DropDownBox/Overview/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')