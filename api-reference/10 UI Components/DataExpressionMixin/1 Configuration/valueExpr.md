---
id: DataExpressionMixin.Options.valueExpr
type: String | function(item)
default: 'this'
---
---
##### shortDescription
Specifies which data field provides unique values to the UI component's [value](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value').

##### param(item): Object
The current item's data object.

##### return: String | Number | Boolean
A unique item identifier.

---
When you do not set this property, the **value** contains a data item from [dataSource]({basewidgetpath}/Configuration/#dataSource) as it is. 

When you set this property, it should have the same value as the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') in the store.

#include uiwidgets-ref-valueExpr-functionnote

#####See Also#####
- [displayExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/displayExpr.md '{basewidgetpath}/Configuration/#displayExpr')