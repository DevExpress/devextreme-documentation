---
id: CombinedFilterExprObj
module: common/grids
export: CombinedFilterExprObj
type: Object
---
---
##### shortDescription
A combined DataGrid/TreeList filter expression.

---
This object includes the following fields:

- **type**: The expression type. Set to *"combined"*.
- **left**: The first filter expression.
- **combiner**: The combination operation. Accepted values: *"and"*, *"or"*.
- **right**: The second filter expression.