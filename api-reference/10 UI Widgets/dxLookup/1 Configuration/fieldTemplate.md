---
id: dxLookup.Options.fieldTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for the input field.

##### param(selectedItem): Object
The selected item's data.

##### param(fieldElement): dxElement
#include common-ref-elementparam with { element: "field" }

##### return: String | Element | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Templates/"
}

#####See Also#####
- [Customize Item Appearance](/concepts/05%20Widgets/Lookup/20%20Customize%20the%20Appearance/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/Customize_Item_Appearance/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')