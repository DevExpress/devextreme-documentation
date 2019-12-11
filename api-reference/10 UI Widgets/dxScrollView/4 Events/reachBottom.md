---
type: eventType
---
---
##### shortDescription
Fires after the widget is scrolled to the bottom and pulled up.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

---
Instead, you can use the [onReachBottom](/api-reference/10%20UI%20Widgets/dxScrollView/1%20Configuration/onReachBottom.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Configuration/#onReachBottom') option to handle the event.

The function handling this event should contain a call to the [release()](/api-reference/10%20UI%20Widgets/dxScrollView/3%20Methods/release(preventScrollBottom).md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#releasepreventScrollBottom') method, which releases the scroll view.

    <!--JavaScript-->
    $("#scrollViewContainer").dxScrollView("instance").on("reachBottom", function(options) {
        . . .
        options.component.release();
    })

#####See Also#####
#include common-link-handleevents