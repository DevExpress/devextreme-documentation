---
id: dxGallery.nextItem(animation)
---
---
##### shortDescription
Shows the next image.

##### return: Promise<void>
A Promise that is resolved after the image is shown.
#include ref-promisedistinction

##### param(animation): Boolean
Specifies whether switching to the image should be animated.

---
If the current item is the last item in the gallery, the method behavior depends on the [loop](/api-reference/10%20UI%20Components/dxGallery/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Components/dxGallery/Configuration/#loop') property value. If **loop** is set to true, the first item is shown. Otherwise, the method does nothing.

#####See Also#####
#include common-link-callmethods