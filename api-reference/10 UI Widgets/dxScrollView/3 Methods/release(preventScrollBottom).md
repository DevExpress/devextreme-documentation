---
##### shortDescription
Notifies the **ScrollView** that data loading is finished.

##### param(preventScrollBottom): Boolean
Specifies whether to prevent the [onReachBottom](/api-reference/10%20UI%20Widgets/dxScrollView/1%20Configuration/onReachBottom.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#onReachBottom') handler execution.

##### return: Promise<void>
A Promise that is resolved after the widget is released. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
Use this method to hide the load indicator and release the scroll view after the [pullDown](/api-reference/10%20UI%20Widgets/dxScrollView/4%20Events/pullDown.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Events/#pullDown') or [reachBottom](/api-reference/10%20UI%20Widgets/dxScrollView/4%20Events/reachBottom.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Events/#reachBottom') events have been raised.

#####See Also#####
#include common-link-callmethods