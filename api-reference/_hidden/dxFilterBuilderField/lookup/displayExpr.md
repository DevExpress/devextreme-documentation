---
id: dxFilterBuilderField.lookup.displayExpr
type: String | function(data) | undefined
default: undefined
---
---
##### shortDescription
Specifies the data field whose values should be displayed.

##### param(data): Object
The current data object.

##### return: String
The displayed value.

---
#include uiwidgets-ref-displayExpr

Leave this property unspecified or set it to `this` if the data source contains primitives.