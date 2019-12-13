---
id: dxScrollView.Options.onPullDown
type: function(e)
default: null
EventForAction: dxScrollView.pullDown
---
---
##### shortDescription
A function that is executed when the "pull to refresh" gesture is performed. Supported in mobile themes only.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
The function passed to this option should contain a call to the [release()](/api-reference/10%20UI%20Widgets/dxScrollView/3%20Methods/release(preventScrollBottom).md '/Documentation/ApiReference/UI_Widgets/dxScrollView/Methods/#releasepreventScrollBottom') method, which releases the scroll view.

    <!--JavaScript-->
    var scrollViewOptions = {
        onPullDown: function(options){
            . . .
            options.component.release();
        }
    }