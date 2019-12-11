---
##### shortDescription
Redraws a widget.

##### param(renderOptions): object
An object containing rerendering options.

---
You can call the **render** method without parameters after the size or visibility of the widget container is changed. Alternatively, call the **render** method passing an object as the parameter. This object must contain the **force** field set to *'true'*. In addition, you can use this object to specify whether or not to perform animation on redrawing with the **animate** field, and whether or not to redraw the widget in an asynchronous mode with the **asyncSeriesRendering** field.

The following code sample illustrates the example of the object that can be passed to the **render** method.

    <!--JavaScript-->var renderOptions = {
        force: true, // forces redrawing
        animate: false, // redraws the widget without animation
        asyncSeriesRendering: false // redraws the widget synchronously
    }