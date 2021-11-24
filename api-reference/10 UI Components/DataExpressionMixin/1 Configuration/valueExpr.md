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
When [dataSource]({basewidgetpath}/Configuration/#dataSource) contains objects, we encourage you to define **valueExpr** to correctly identify data items. Otherwise, the component uses referential equality to compare objects and may result in unexpected behavior.

If you use a store, the **valueExpr** property should have the same value as the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') in the store.

#include uiwidgets-ref-valueExpr-functionnote

#####See Also#####
- [displayExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/displayExpr.md '{basewidgetpath}/Configuration/#displayExpr')