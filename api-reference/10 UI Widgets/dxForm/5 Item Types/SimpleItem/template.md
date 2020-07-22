---
id: dxFormSimpleItem.template
type: template
---
---
##### shortDescription
A template to be used for rendering the form item.

##### param(data): Object
The item's data.

##### field(data.component): dxForm
The **Form** instance.

##### field(data.dataField): String
The item's [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField').

##### field(data.editorOptions): Object
The item editor's [configuration](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions').

##### field(data.editorType): String
The editor's [type](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType').

##### field(data.name): String
The item's [name](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/name.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name').

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Element | jQuery
A template name or container.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/FormsAndMultiPurposeOverview/"
}
#include common-githubbutton with {
    url: "https://github.com/DevExpress-Examples/Form-Custom-items"
}

#####See Also#####
- [Customize a Simple Item](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item')