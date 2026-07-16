---
id: CombinedFilterExpr
module: common/grids
export: CombinedFilterExpr
type: Object
generateTypeLink: 
---
---
##### shortDescription
A combined DataGrid/TreeList filter expression.

---
This object includes the following fields:

- **type**: The expression type. Set to *"combined"*.
- **leftId**: The ID of the first filter expression's node ([FilterExprNode](/api-reference/40%20Common%20Types/15%20grids/FilterExprNode '{basewidgetpath}/FilterExprNode/')).
- **combiner**: The combination operation. Accepted values: *"and"*, *"or"*.
- **rightId**: The ID of the second filter expression's node ([FilterExprNode](/api-reference/40%20Common%20Types/15%20grids/FilterExprNode '{basewidgetpath}/FilterExprNode/')).