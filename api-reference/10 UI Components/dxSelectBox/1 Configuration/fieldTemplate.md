---
id: dxSelectBox.Options.fieldTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for the text field. Must contain the [TextBox](/Documentation/ApiReference/UI_Components/dxTextBox/) UI component.

##### param(selectedItem): Object
The selected item's data.

##### param(fieldElement): DxElement
#include common-ref-elementparam with { element: "field" }

##### return: String | Element | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview/"
}

#####See Also#####
- [Customize Item Appearance](/concepts/05%20UI%20Components/SelectBox/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/SelectBox/Customize_Item_Appearance/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')