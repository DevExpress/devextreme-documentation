---
id: dxScrollView.Options.onPullDown
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the "pull to refresh" gesture is performed. Supported on mobile devices only.

##### param(e): PullDownEvent
Information about the event.

---
The function passed to this property should contain a call to the [release()](/api-reference/10%20UI%20Components/dxScrollView/3%20Methods/release(preventScrollBottom).md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#releasepreventScrollBottom') method, which releases the scroll view.

    <!--JavaScript-->
    var scrollViewOptions = {
        onPullDown: function(options){
            . . .
            options.component.release();
        }
    }