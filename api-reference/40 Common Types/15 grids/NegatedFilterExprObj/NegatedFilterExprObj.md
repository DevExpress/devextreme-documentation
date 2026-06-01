---
id: NegatedFilterExprObj
module: common/grids
export: NegatedFilterExprObj
type: Object
---
---
##### shortDescription
A negated ([unary NOT](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering/05%20Unary%20Filter%20Operation.md '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering/Unary_Filter_Operation')) DataGrid/TreeList filter expression.

---
This object includes the following fields:

- **type**: The expression type. Set to *"negated"*.
- **expression**: A filter expression ([FilterExprObj](/api-reference/40%20Common%20Types/15%20grids/FilterExprObj '{basewidgetpath}/FilterExprObj/')) to negate.