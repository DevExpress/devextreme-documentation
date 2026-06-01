---
id: BasicFilterExprObj
module: common/grids
export: BasicFilterExprObj
type: Object
---
---
##### shortDescription
A basic DataGrid/TreeList filter expression.

---
This object includes the following fields:

- **type**: The expression type. Set to *"basic"*.
- **field**: The filtered data field.
- **operator**: A [SearchOperation](/api-reference/40%20Common%20Types/10%20data/SearchOperation.md '/Documentation/ApiReference/Common_Types/data/#SearchOperation') comparison operator.
- **value**: The comparison value. Can be one of the following types:
    - `string`
    - `number`
    - `boolean`
    - `null`
