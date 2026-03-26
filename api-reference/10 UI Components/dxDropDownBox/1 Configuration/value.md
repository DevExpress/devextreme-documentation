---
id: dxDropDownBox.Options.value
type: any
default: null
---
---
##### shortDescription
Specifies the selected value. This can be an object if [dataSource](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') contains objects, the store [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') is specified, and [valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '{basewidgetpath}/Configuration/#valueExpr') is not set.

---
When [dataSource](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') contains objects, define [valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '{basewidgetpath}/Configuration/#valueExpr') to identify data items correctly. If **valueExpr** is not specified, the component compares object references instead of object values to determine which item to display. For example, if you set the **value** property to an object whose values match those in **dataSource** to select all items, the component does not display anything.

[note] If you synchronize **value** with the embedded component's **selectedRowKeys**/**selectedItemKeys** property (for instance, [DataGrid.selectedRowKeys](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selectedRowKeys.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#selectedRowKeys')), ensure the **value** type matches the **selectedRowKeys**/**selectedItemKeys** type (such as [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)).

#####See Also#####
- [DropDownBox - Synchronize with the Embedded Element](/concepts/05%20UI%20Components/DropDownBox/15%20Synchronize%20with%20the%20Embedded%20Element.md '/Documentation/Guide/UI_Components/DropDownBox/Synchronize_with_the_Embedded_Element/')