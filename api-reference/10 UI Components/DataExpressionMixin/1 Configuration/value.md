---
id: DataExpressionMixin.Options.value
type: any
default: null
---
---
##### shortDescription
Specifies the currently selected value. May be an object if [dataSource](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') contains objects, the store [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') is specified, and [valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '{basewidgetpath}/Configuration/#valueExpr') is not set.

---
When [dataSource](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') contains objects, you should define [valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '{basewidgetpath}/Configuration/#valueExpr') to correctly identify data items. If **valueExpr** is not specified, the component compares object references to display an item, not object values. For instance, if you define the **value** property as an object containing identical values to **dataSource** to select all items, the component displays nothing.