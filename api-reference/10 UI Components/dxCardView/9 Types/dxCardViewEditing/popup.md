---
id: dxCardViewEditing.popup
type: Object
---
---
##### shortDescription
Configures the editing popup.

---
You can specify any [Popup property](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/') in this object, but note that the following properties override the {WidgetName}'s internal logic:

- [contentTemplate](/api-reference/10%20UI%20Components/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#contentTemplate')
- [fullScreen](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/fullScreen.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#fullScreen')
- [showTitle](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#showTitle')
- [toolbarItems](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/toolbarItems '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/toolbarItems/')

The popup always contains a form whose items are used for editing. Use the [form](/api-reference/10%20UI%20Components/dxCardView/9%20Types/dxCardViewEditing/form.md '{basewidgetpath}/Configuration/editing/#form') property to customize the form's items.

#include widgets-config-object-option-note with {
    optionName: "popup"
}

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/CardView/PopupEditing"
}
