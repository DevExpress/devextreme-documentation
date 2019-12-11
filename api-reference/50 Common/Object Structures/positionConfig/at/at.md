---
acceptValues: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'left top' | 'left bottom' | 'right top' | 'right bottom'
type: string | object
---
---
##### shortDescription
The target element position that the widget is positioned against.

---
The **at** option can take on an object containing the **x** and **y** fields, which specify horizontal and vertical position specifier respectively, or a string value consisting of horizontal and vertical position specifiers separated by a space (e.g., "left top"). The default value for each position specifier is "center". If you assign the "left" value to this option, it will be converted to the "left center" value.

    <!--JavaScript-->
    position: { at: 'left bottom' };