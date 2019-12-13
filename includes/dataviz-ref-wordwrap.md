The following modes are available:

- *"normal"*    
Text breaks only at allowed breakpoints (for example, a space between two words).

- *"breakWord"*     
Words can be broken if there are no available breakpoints in the line.

- *"none"*  
Word wrap is disabled.

If the text overflows the container even after word wrap, the widget applies the [textOverflow](${{textOverflow_link}}) option. 

#include common-ref-enum with {
    enum: "`VizWordWrap`",
    values: "`Normal`, `BreakWord`, and `None`"
}