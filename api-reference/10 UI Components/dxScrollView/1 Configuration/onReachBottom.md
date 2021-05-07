---
id: dxScrollView.Options.onReachBottom
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the content is scrolled down to the bottom.

##### param(e): Object
Information about the event.

##### field(e.component): dxScrollView
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

---
The function passed to this property should contain a call to the [release()](/api-reference/10%20UI%20Components/dxScrollView/3%20Methods/release(preventScrollBottom).md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#releasepreventScrollBottom') method, which releases the scroll view.

    <!--JavaScript-->
    var scrollViewOptions = {
        onReachBottom: function(options){
            . . .
            options.component.release();
        }
    }