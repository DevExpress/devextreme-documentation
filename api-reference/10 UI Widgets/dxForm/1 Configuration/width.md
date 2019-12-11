---
default: undefined
type: number | string | function
---
---
##### shortDescription
Specifies the width of the widget.

##### return: number|string
The widget width.

---
The option can hold a value of the following types.

- *numeric*  
The widget width in pixels.
- *string*  
A CSS measurement of the widget width (e.g., "55px", "80%", "auto" and "inherit").
- *function*  
The function returning the widget width. For example, see the following code. 

        <!--JavaScript-->width: function () { 
            return baseWidth - 10 + "%";
        }

[note]Even if the width of the widget is specified, the count of columns may depend on the screen width. For example, if the screen width is not enough to display the whole form's container, the count of columns depends on the screen width, not the container. To always use a fixed count of columns regardless of the screen width, pass an empty function to the [screenByWidth](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/screenByWidth.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#screenByWidth') option.

    <!--HTML-->
    var formOptions: {
        ...
        screenByWidth: function() { }
    }