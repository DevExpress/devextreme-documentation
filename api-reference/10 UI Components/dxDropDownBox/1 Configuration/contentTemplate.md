---
id: dxDropDownBox.Options.contentTemplate
type: template
default: 'content'
---
---
##### shortDescription
Specifies a custom template for the drop-down content.

##### param(templateData): Object
Data associated with the UI component.

##### field(templateData.component): dxDropDownBox
The UI component's instance.

##### field(templateData.value): any
The currently selected value.

##### param(contentElement): DxElement
#include common-ref-elementparam with { element: "UI component content" }

##### return: String | Element | jQuery
A template name or container.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/"
}

#####See Also#####
- [DropDownBox - Getting Started](/concepts/05%20UI%20Components/DropDownBox/00%20Getting%20Started%20with%20DropDownBox '/Documentation/Guide/UI_Components/DropDownBox/Getting_Started_with_DropDownBox/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')