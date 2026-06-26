---
id: MultiValueFilterExpr
module: common/grids
export: MultiValueFilterExpr
type: Object
generateTypeLink: 
---
---
##### shortDescription
A multi-value DataGrid/TreeList filter expression.

---
This object includes the following fields:

- **type**: The expression type. Set to *"basic"*.
- **field**: The filtered data field.
- **operator**: A comparison operator ([MultiValueSearchOperation](/Documentation/ApiReference/Common_Types/data/#MultiValueSearchOperation)).
- **value**: Comparison values (a [ScalarFilterValue](/Documentation/ApiReference/Common_Types/grids/ScalarFilterValue/) array).
