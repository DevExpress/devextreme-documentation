---
id: BaseChart.render(renderOptions)
---
---
##### shortDescription
Redraws the widget.

##### param(renderOptions): Object
Rendering options.

---
You can call the **render** method without parameters after the size or visibility of the widget container is changed. Alternatively, call the **render** method passing an object as the parameter. This object must contain the **force** field set to *'true'*. In addition, you can use this object to specify whether or not to perform animation on redrawing with the **animate** field.

The following code sample illustrates the example of the object that can be passed to the **render** method.

    <!--JavaScript-->var renderOptions = {
        force: true, // forces redrawing
        animate: false // redraws the widget without animation
    }

#####See Also#####
#include common-link-callmethods