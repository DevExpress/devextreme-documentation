---
id: dxChat.Options.onAttachmentDownloadClick
type: function(e) | undefined
default: undefined
---
---
##### shortDescription
A function that is executed after a user clicks "Download" button.

##### param(e): ui/chat:AttachmentDownloadEvent
Information about the event.

##### field(e.attachment): Attachment
The downloaded file attachment.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
[note] If not specified, "Download" button is not rendered.

// CODE SNIPPET TBA