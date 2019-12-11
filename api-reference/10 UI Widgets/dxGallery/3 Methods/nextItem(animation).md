---
##### shortDescription
Shows the next gallery item.

##### param(animation): Boolean
A Boolean value indicating whether or not to use animation when switching to the next item.

##### return: Promise
A deferred object resolved after the gallery item has changed.

---
If the current item is the last item in the gallery, the method behavior depends on the [loop](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#loop') option value. If **loop** is set to true, the first item is shown. Otherwise, the method does nothing.

#####See Also#####
#include common-link-callmethods