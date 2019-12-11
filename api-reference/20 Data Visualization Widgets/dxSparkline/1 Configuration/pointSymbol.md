---
default: 'circle'
acceptValues: 'circle' | 'cross' | 'polygon' | 'square' | 'triangle'
type: String
---
---
##### shortDescription
Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types.

---
#include common-ref-enum with {
    enum: "`VizPointSymbol`",
    values: "`Circle`, `Square`, `Polygon`, `Triangle`, and `Cross`"
}