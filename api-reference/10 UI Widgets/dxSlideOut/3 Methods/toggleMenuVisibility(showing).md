---
##### shortDescription
Shows or hides the slide-out menu depending on the argument.

##### param(showing): Boolean
Specifies whether to show or hide the widget.

##### return: Promise<void>
A Promise that is resolved after the menu is shown/hidden. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
You can use this method instead of [showMenu()](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Methods/#show) and [hideMenu()](/Documentation/ApiReference/UI_Widgets/dxSlideOut/Methods/#hide) methods. The only difference is that you specify whether to show or hide the widget passing true or false to the method parameter.

#####See Also#####
#include common-link-callmethods