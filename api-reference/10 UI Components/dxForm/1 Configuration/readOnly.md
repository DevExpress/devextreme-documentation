---
id: dxForm.Options.readOnly
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether all editors on the form are read-only. Applies only to non-[templated](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template') items.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/"
}

[note] Item [editor options](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions') override general Form parameters. For example, if you set **readOnly** to `true` for one of the Form editors, it will be read-only while Form is not. 