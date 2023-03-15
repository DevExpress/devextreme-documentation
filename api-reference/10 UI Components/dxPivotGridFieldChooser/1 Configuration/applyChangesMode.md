---
id: dxPivotGridFieldChooser.Options.applyChangesMode
type: Enums.ApplyChangesMode
default: 'instantly'
---
---
##### shortDescription
Specifies when to apply changes made in the UI component to the PivotGrid.

---
The following modes are available: 

- *"instantly"*     
Applies changes immediately.

- *"onDemand"*      
Applies or cancels changes only when this is requested from the API - by calling the [applyChanges()](/api-reference/10%20UI%20Components/dxPivotGridFieldChooser/3%20Methods/applyChanges().md '/Documentation/ApiReference/UI_Components/dxPivotGridFieldChooser/Methods/#applyChanges') or [cancelChanges()](/api-reference/10%20UI%20Components/dxPivotGridFieldChooser/3%20Methods/cancelChanges().md '/Documentation/ApiReference/UI_Components/dxPivotGridFieldChooser/Methods/#cancelChanges') method or by changing the [state](/api-reference/10%20UI%20Components/dxPivotGridFieldChooser/1%20Configuration/state.md '/Documentation/ApiReference/UI_Components/dxPivotGridFieldChooser/Configuration/#state') object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/StandaloneFieldChooser/"
}