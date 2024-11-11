---
id: DataExpressionMixin.Options.displayExpr
type: String | function(item) | undefined
default: undefined
---
---
##### shortDescription
Specifies the data field whose values should be displayed.

##### param(item): Object
The current item's data object.

##### return: String
The displayed value.

---
#include uiwidgets-ref-displayExpr

Leave this property unspecified or set it to `this` if the data source contains primitives.

#####See Also#####
- [valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '{basewidgetpath}/Configuration/#valueExpr')