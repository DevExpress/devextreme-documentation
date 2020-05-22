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

[note] Diagram page settings are stored in a diagram model. When the **readOnly** property is set to **true**, the model can not be modified and page settings ([pageColor](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#pageColor), [pageOrientation](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#pageOrientation), and [pageSize](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/pageSize/)) are not in effect.