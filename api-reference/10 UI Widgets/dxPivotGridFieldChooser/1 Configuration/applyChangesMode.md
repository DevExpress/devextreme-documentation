---
id: dxPivotGridFieldChooser.Options.applyChangesMode
acceptValues: 'instantly' | 'onDemand'
type: String
default: 'instantly'
---
---
##### shortDescription
Specifies when to apply changes made in the widget to the **PivotGrid**.

---
The following modes are available: 

- *"instantly"*     
Applies changes immediately.

- *"onDemand"*      
Applies or cancels changes only when this is requested from the API - by calling the [applyChanges()](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser/3%20Methods/applyChanges().md '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Methods/#applyChanges') or [cancelChanges()](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser/3%20Methods/cancelChanges().md '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Methods/#cancelChanges') method or by changing the [state](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser/1%20Configuration/state.md '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Configuration/#state') object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/StandaloneFieldChooser/"
}