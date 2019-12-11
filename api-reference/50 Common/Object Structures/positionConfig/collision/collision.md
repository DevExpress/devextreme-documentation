---
acceptValues: 'none' | 'flip' | 'fit' | 'flipfit' | 'none flip' | 'flip none' | 'none fit' | 'fit none' | 'none flipfit' | 'flipfit none' | 'flip fit' | 'fit flip' | 'fit flipfit' | 'flipfit fit'
type: string | object
---
---
##### shortDescription
Specifies how to move the widget if it overflows the screen.

---
A string passed to this option should contain a collision handler name, or a pair of names separated by space. If the string consists of a single collision handler name, it is applied to both horizontal and vertical axes. If you pass a pair of names separated by space, the first collision handler will be applied to the horizontal axis, the second to the vertical axis.

    <!--JavaScript-->
    // a string containing horizontal and vertical
    // collision handlers separated by space
    collision: "flip fit";

You can also specify different collision handlers for horizontal and vertical axes in one of the following ways.

    <!--JavaScript-->
    // an object containing 'x' and 'y' fields
    collision: {
        x: "flip", // horizontal collision handler
        y: "none" // vertical collision handler
    }

The available collision handler names are:

- **none**  
 Collisions do not affect widget position.
- **flip**  
 Moves the widget to the opposite side of the target element if it allows more of the widget to be visible.
- **fit**  
 Shifts the widget from outside of the screen to fully display the widget.
- **flipfit**  
 Applies the **fit** collision handler after **flip**.