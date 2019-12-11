---
module: mobile/init_mobile_viewport
export: default
---
---
##### shortDescription
Sets parameters for the **viewport** meta tag.

##### param(options): Object
An object specifying whether to enable or disable pinch-zooming and panning gestures within a mobile browser's view port.

##### field(options.allowZoom): Boolean
Specifies whether or not to enable pinch-zooming in a mobile browser's view port.

##### field(options.allowPan): Boolean
Specifies whether or not to enable panning on the vertical and horizontal axes in a mobile browser's view port.

##### field(options.allowSelection): Boolean
Specifies whether or not to enable selection in a mobile browser's view port.

---
[note]This method is useful in mobile applications only.