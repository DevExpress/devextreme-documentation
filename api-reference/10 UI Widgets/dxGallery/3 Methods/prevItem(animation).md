---
##### shortDescription
Shows the previous image.

##### param(animation): Boolean
Specifies whether switching to the image should be animated.

##### return: Promise<void>
A Promise that is resolved after the image is shown. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
If the current item is the first item in the gallery, the method behavior depends on the [loop](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#loop') option value. If **loop** is set to true, the last item is shown. Otherwise, the method does nothing.

#####See Also#####
#include common-link-callmethods