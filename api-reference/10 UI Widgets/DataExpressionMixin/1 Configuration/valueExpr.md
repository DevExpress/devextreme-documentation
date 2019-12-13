---
id: DataExpressionMixin.Options.valueExpr
type: String | function(item)
default: 'this'
---
---
##### shortDescription
Specifies which data field provides unique values to the widget's [value](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value').

##### param(item): Object
The current item's data object.

##### return: String | Number | Boolean
A unique item identifier.

---
Always set this option if the [dataSource](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/dataSource '{basewidgetpath}/Configuration/dataSource/') contains objects. Alternatively, you can specify the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') in the store. 

#include uiwidgets-ref-valueExpr-functionnote

#####See Also#####
- [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '{basewidgetpath}/Configuration/#displayExpr')