---
id: dxFormSimpleItem.editorType
type: Enums.FormItemComponent
---
---
##### shortDescription
Specifies which editor UI component is used to display and edit the form item value.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}

[important]If you use [DevExtreme modules](/concepts/Common/Modularity/01%20Link%20Modules/10%20Use%20Webpack.md '/Documentation/Guide/Common/Modularity/'), import the editor's module when specifying this property. You can omit modules for *"dxTextBox"*, *"dxDateBox"*, *"dxCheckBox"*, and *"dxNumberBox"*, because the Form UI component imports them automatically when creating form items. 

[note] This property does not [support](/api-reference/10%20UI%20Components/dxForm/9%20Types/FormItemComponent.md '/Documentation/ApiReference/UI_Components/dxForm/Types/#FormItemComponent') all editors. You can use a [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template') to define an unsupported component. 

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-scheduler-filter-appointments-by-name-and-date"
}

#####See Also#####
- [Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
