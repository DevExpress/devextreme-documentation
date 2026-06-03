---
id: CombinedFilterExpr
module: common/grids
export: CombinedFilterExpr
type: Object
---
---
##### shortDescription
A combined DataGrid/TreeList filter expression.

---
This object includes the following fields:

- **type**: The expression type. Set to *"combined"*.
- **leftId**: The ID of the first filter expression's node ([FilterExprNode]({basewidgetpath}/FilterExprNode/)).
- **combiner**: The combination operation. Accepted values: *"and"*, *"or"*.
- **rightId**: The ID of the second filter expression's node ([FilterExprNode]({basewidgetpath}/FilterExprNode/)).