---
id: dxGallery.nextItem(animation)
---
---
##### shortDescription
Shows the next image.

##### return: Promise<void>
A Promise that is resolved after the image is shown. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(animation): Boolean
Specifies whether switching to the image should be animated.

---
If the current item is the last item in the gallery, the method behavior depends on the [loop](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#loop') option value. If **loop** is set to true, the first item is shown. Otherwise, the method does nothing.

#####See Also#####
#include common-link-callmethods