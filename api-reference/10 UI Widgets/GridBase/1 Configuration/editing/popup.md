---
id: GridBaseEditing.popup
type: dxPopup_Options
---
---
##### shortDescription
Configures the popup. Used only if **editing**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') is *"popup"*.

---
You can specify any [Popup option](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/') in this object, but note that the following options override the **{WidgetName}**'s internal logic:

- [contentTemplate](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate')
- [fullScreen](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/fullScreen.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#fullScreen')
- [showTitle](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle')
- [toolbarItems](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/toolbarItems '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/toolbarItems/')

The popup always contains a form whose items are used for editing. Use the [form](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/form.md '{basewidgetpath}/Configuration/editing/#form') option to customize the form's items.

#include widgets-config-object-option-note with {
    optionName: "popup"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/PopupEditing/"
}
