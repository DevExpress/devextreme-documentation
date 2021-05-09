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
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/"
}

#####See Also#####
- [DropDownBox - Overview](/concepts/05%20UI%20Components/DropDownBox/10%20Overview.md '/Documentation/Guide/UI_Components/DropDownBox/Overview/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')