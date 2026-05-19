---
id: NegatedFilterExprObj
module: common/grids
export: NegatedFilterExprObj
type: Object
---
---
##### shortDescription
A negated ([unary NOT](/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering/Unary_Filter_Operation)) DataGrid/TreeList filter expression.

---
This object includes the following fields:

- **type**: The expression type. Set to *"negated"*.
- **expression**: A filter expression ([FilterExprObj]({basewidgetpath}/FilterExprObj/)) to negate.