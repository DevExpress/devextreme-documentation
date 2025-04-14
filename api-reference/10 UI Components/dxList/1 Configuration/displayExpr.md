---
id: dxList.Options.displayExpr
type: String | function(item) | undefined
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

Leave this property unspecified or set it to `this` if the data source contains primitives.

[note] If **displayExpr** is not defined and no [text](/Documentation/ApiReference/UI_Components/dxList/Configuration/items/#text) field exists for an item, List can't identify the display data and specifies aria-label as `List item content`. To set another aria-label, define **displayExpr**.