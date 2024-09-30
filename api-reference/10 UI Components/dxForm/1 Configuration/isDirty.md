---
id: dxForm.Options.isDirty
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether current editor values differ from initial values.

---
This property is a read-only flag. You can use it to check if any editor value changed on this Form. 

[note]

- Specify the [dataField](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField') of each Form item for this property to take effect.

- If you use [DateBox](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/isDirty.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#isDirty') or [DateRangeBox](/api-reference/10%20UI%20Components/dxDateRangeBox/1%20Configuration/isDirty.md '/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#isDirty') as a Form item, and users enter invalid dates, the **isDirty** value does not change.

- This property works only for [predefined editors](/Documentation/ApiReference/UI_Components/dxForm/Types/#FormItemComponent) and does not work with custom [templates](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template').

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

#####See Also#####
- [reset](/api-reference/10%20UI%20Components/dxForm/3%20Methods/reset(editorsData).md '{basewidgetpath}/Methods/#reseteditorsData')