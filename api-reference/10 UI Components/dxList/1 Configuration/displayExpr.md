---
id: dxList.Options.displayExpr
type: String | function(item)
default: undefined
---
---
##### shortDescription
Specifies the data field whose values should be displayed. Defaults to *"text"* when the data source contains objects.

##### param(item): Object
The current item's data object.

##### return: String
The displayed value.

---
#include uiwidgets-ref-displayExpr

Leave this option unspecified or set it to `this` if the data source contains primitives.