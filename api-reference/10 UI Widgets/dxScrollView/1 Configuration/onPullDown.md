---
EventForAction: ..\4 Events\pullDown.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [pullDown](/api-reference/10%20UI%20Widgets/dxScrollView/4%20Events/pullDown.md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Events/#pullDown') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Assign a function to perform a custom action after the widget is scrolled to the top and pulled down.

The function passed to this option should contain a call to the [release()](/api-reference/10%20UI%20Widgets/dxScrollView/3%20Methods/release(preventScrollBottom).md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#releasepreventScrollBottom') method, which releases the scroll view.

    <!--JavaScript-->
    var scrollViewOptions = {
        onPullDown: function(options){
            . . .
            options.component.release();
        }
    }

[note]The "pull down to refresh" gesture is not supported by desktop browsers and Windows Phone devices. You can use it only in [mobile themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') except the Windows Phone theme.