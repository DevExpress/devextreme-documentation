---
id: DataExpressionMixin.Options.value
type: any
default: null
---
---
##### shortDescription
Specifies the currently selected value. May be an object if [dataSource](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') contains objects, the store [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') is specified, and [valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '{basewidgetpath}/Configuration/#valueExpr') is not set.

---
When [dataSource]({basewidgetpath}/Configuration/#dataSource) contains objects, you should define [valueExpr]({basewidgetpath}/Configuration/#valueExpr) to correctly identify data items. Otherwise, the component uses referential equality to compare objects. For example, when **valueExpr** is not specified and you assign an object with the same field and values as **dataSource** to the **value** property, these two objects are not equal, and the component displays nothing.