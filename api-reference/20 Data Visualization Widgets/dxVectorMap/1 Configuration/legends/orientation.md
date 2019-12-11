---
default: undefined
acceptValues: 'horizontal' | 'vertical'
type: String
---
---
##### shortDescription
Specifies whether to arrange legend items horizontally or vertically.

---
When this option is set to *'vertical'*, legend items are displayed vertically (i.e., in a column). When this option is set to *'horizontal'*, legend items are displayed horizontally (i.e, in a row). When this option is not defined, the legend orientation is chosen automatically.

#include common-ref-enum with {
    enum: "`Orientation`",
    values: "`Horizontal` and `Vertical`"
}