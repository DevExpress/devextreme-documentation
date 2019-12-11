---
##### shortDescription
Shows the previous gallery item.

##### param(animation): Boolean
A Boolean value indicating whether or not to use animation when switching to the previous item.

##### return: Promise
A deferred object resolved after the gallery item has changed.

---
If the current item is the first item in the gallery, the method behavior depends on the [loop](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#loop') option value. If **loop** is set to true, the last item is shown. Otherwise, the method does nothing.