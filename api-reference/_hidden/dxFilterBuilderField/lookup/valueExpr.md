---
id: dxFilterBuilderField.lookup.valueExpr
type: String | function(data) | undefined
default: undefined
---
---
##### shortDescription
Specifies the data field whose values should be replaced with values from the [displayExpr](/api-reference/_hidden/dxFilterBuilderField/lookup/displayExpr.md '{basewidgetpath}/Configuration/fields/lookup/#displayExpr') field.

##### param(data): Object
The current item's data object.

##### return: String | Number | Boolean
A unique item identifier.

---
Values from this data field must have the same type as [dataField](/api-reference/_hidden/dxFilterBuilderField/dataField.md '{basewidgetpath}/Configuration/fields/#dataField') values.

#include uiwidgets-ref-valueExpr-functionnote