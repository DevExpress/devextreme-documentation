---
id: dxSlideOut.toggleMenuVisibility(showing)
---
---
##### shortDescription
Shows or hides the slide-out menu depending on the argument.

##### return: Promise<void>
A Promise that is resolved after the menu is shown/hidden. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(showing): Boolean | undefined
Specifies whether to show or hide the UI component. **undefined** reverses the current state.

---
You can use this method instead of [showMenu()](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Methods/#showMenu) and [hideMenu()](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Methods/#hideMenu) methods. The only difference is that you specify whether to show or hide the UI component when you pass **true**, **false**, or **undefined** to the method parameter.

#####See Also#####
#include common-link-callmethods