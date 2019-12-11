---
default: 'hide'
acceptValues: 'hide' | 'none'
type: String | Object
---
---
##### shortDescription
Decides how to arrange scale labels when there is not enough space to keep all of them.

---
When scale labels overlap each other, you can rearrange them by setting this option to one of the following values.

- **hide**      
Hides certain scale labels leaving more space for the others.
- **none**      
Leaves scale labels overlapped.

#include common-ref-enum with {
    enum: "`ScaleLabelOverlappingBehavior`",
    values: "`Hide` and `None`"
}

[note] Specifying this option with an object is <span style="color:red">deprecated</span>.