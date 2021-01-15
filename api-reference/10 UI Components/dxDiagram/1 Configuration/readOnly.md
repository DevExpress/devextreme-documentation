---
id: dxDiagram.Options.readOnly
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the diagram is read-only.

---
Set the **readOnly** option to **true** to prohibit users from editing the diagram.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/ReadOnly/"
}

[note] Diagram page settings are stored in a diagram model. When the **readOnly** property is set to **true**, the model can not be modified and page settings ([pageColor](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/pageColor.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#pageColor'), [pageOrientation](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/pageOrientation.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#pageOrientation'), and [pageSize](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/pageSize '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/pageSize/')) are not in effect.