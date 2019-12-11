---
default: { my: 'center', at: 'center', of: window }
firedEvents: positioning, positioned
---
---
##### shortDescription
Positions the widget.

---
This option accepts one of the following:

- **[Position configuration object](/api-reference/50%20Common/Object%20Structures/positionConfig '/Documentation/ApiReference/Common/Object_Structures/positionConfig/')**    
An object that specifies the position in every detail.

- **String**        
A shortcut listed in the accepted values. Positions the widget relative to the window.

- **Function**      
A function that returns one of the above. Use it to position the widget differently depending on a condition.

#include common-ref-enum with {
    enum: "`PositionAlignment`",
    values: "`Bottom`, `Center`, `Left`, `LeftBottom`, `LeftTop`, `RightBottom`, `RightTop`, and `Top`"
}