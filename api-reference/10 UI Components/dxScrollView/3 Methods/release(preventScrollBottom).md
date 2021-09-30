---
id: dxScrollView.release(preventScrollBottom)
---
---
##### shortDescription
Notifies the ScrollView that data loading is finished.

##### return: Promise<void>
A Promise that is resolved after the UI component is released.
#include ref-promisedistinction

##### param(preventScrollBottom): Boolean
Specifies whether to prevent the [onReachBottom](/api-reference/10%20UI%20Components/dxScrollView/1%20Configuration/onReachBottom.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#onReachBottom') handler execution.

---
Use this method to hide the load indicator and release the scroll view after the [pullDown](/api-reference/10%20UI%20Components/dxScrollView/4%20Events/pullDown.md '/Documentation/ApiReference/UI_Components/dxScrollView/Events/#pullDown') or [reachBottom](/api-reference/10%20UI%20Components/dxScrollView/4%20Events/reachBottom.md '/Documentation/ApiReference/UI_Components/dxScrollView/Events/#reachBottom') events have been raised.

#####See Also#####
#include common-link-callmethods