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

##### field(e.component): dxFileUploader
The UI component's instance.

##### field(e.dropZoneElement): DxElement
A drop zone element.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
Model data. Available only if Knockout is used.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/CustomDropzone/"
}

#####See Also#####
- [dropZone](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/dropZone.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#dropZone')
