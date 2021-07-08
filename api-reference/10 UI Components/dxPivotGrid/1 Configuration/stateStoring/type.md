---
id: dxPivotGrid.Options.stateStoring.type
acceptValues: 'custom' | 'localStorage' | 'sessionStorage'
type: String
default: 'localStorage'
---
---
##### shortDescription
Specifies the type of storage to be used for state storing.

---
When state storing is enabled, PivotGrid stores data about its state on the client side. The type of storage that will suit your needs best depends on the supposed lifetime of user-specified pivot grid settings, such as fields configuration, sorting, filters, expanded headers, etc. If these settings should be destroyed after a browser session ends, use a *session* storage. If it is important to keep them for a longer time, choose a *local* storage.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/StatePersistence/"
}

If you want to define specific actions on saving and loading a state, use a custom type of storage. For this purpose, specify the [customSave](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/stateStoring/customSave.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/stateStoring/#customSave') and [customLoad](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/stateStoring/customLoad.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/stateStoring/#customLoad') callback functions.
