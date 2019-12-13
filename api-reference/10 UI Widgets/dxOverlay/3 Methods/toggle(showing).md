---
id: dxOverlay.toggle(showing)
---
---
##### shortDescription
Shows or hides the widget depending on the argument.

##### return: Promise<Boolean>
A Promise that is resolved with **true** if the widget is shown or **false** if it is hidden. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(showing): Boolean
Specifies whether to show or hide the widget.

---
You can use the **toggle(showing)** method instead of the **show()** and **hide()** methods. In this case, pass true or false as the method parameter to show or hide the widget.

The widget is automatically hidden after the time specified in the [displayTime](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/displayTime.md '{basewidgetpath}/Configuration/#displayTime') option.

#####See Also#####
#include common-link-callmethods