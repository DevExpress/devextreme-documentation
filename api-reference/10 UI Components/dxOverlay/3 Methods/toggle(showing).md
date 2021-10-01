---
id: dxOverlay.toggle(showing)
---
---
##### shortDescription
Shows or hides the UI component depending on the argument.

##### return: Promise<Boolean>
A Promise that is resolved with **true** if the UI component is shown or **false** if it is hidden.
#include ref-promisedistinction

##### param(showing): Boolean
Specifies whether to show or hide the UI component.

---
You can use the **toggle(showing)** method instead of the **show()** and **hide()** methods. In this case, pass true or false as the method parameter to show or hide the UI component.

The UI component is automatically hidden after the time specified in the [displayTime](/api-reference/10%20UI%20Components/dxToast/1%20Configuration/displayTime.md '{basewidgetpath}/Configuration/#displayTime') property.

#####See Also#####
#include common-link-callmethods