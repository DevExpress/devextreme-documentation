---
id: dxSlideOut.toggleMenuVisibility(showing)
---
---
##### shortDescription
Shows or hides the slide-out menu depending on the argument.

##### return: Promise<void>
A Promise that is resolved after the menu is shown/hidden. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(showing): Boolean
Specifies whether to show or hide the UI component.

---
You can use this method instead of [showMenu()](/api-reference/10%20UI%20Widgets/dxSlideOut/3%20Methods/showMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Methods/#showMenu') and [hideMenu()](/api-reference/10%20UI%20Widgets/dxSlideOut/3%20Methods/hideMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Methods/#hideMenu') methods. The only difference is that you specify whether to show or hide the UI component passing true or false to the method parameter.

#####See Also#####
#include common-link-callmethods