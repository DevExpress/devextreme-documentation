---
id: dxFileUploader.Options.onDropZoneLeave
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the mouse leaves a drop zone as it drags a file.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.dropZoneElement): dxElement
A drop zone element.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
Model data. Available only if Knockout is used.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/CustomDropzone/"
}

#####See Also#####
- [dropZone](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#dropZone)
