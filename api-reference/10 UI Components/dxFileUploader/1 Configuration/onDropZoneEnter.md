---
id: dxFileUploader.Options.onDropZoneEnter
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the mouse enters a drop zone while dragging a file.

##### param(e): ui/file_uploader:DropZoneEnterEvent
Information about the event.

##### field(e.component): {WidgetName}
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

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/CustomDropzone/"
}

#####See Also#####
- [dropZone](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/dropZone.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#dropZone')
