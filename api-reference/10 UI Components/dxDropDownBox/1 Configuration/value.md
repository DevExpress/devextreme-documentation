---
id: dxDropDownBox.Options.value
type: any
default: null
---
---
##### shortDescription
Specifies the currently selected value. May be an object if [dataSource]({basewidgetpath}/Configuration/#dataSource) contains objects, the store [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') is specified, and [valueExpr]({basewidgetpath}/Configuration/#valueExpr) is not set.

---
When [dataSource]({basewidgetpath}/Configuration/#dataSource) contains objects, you should define [valueExpr]({basewidgetpath}/Configuration/#valueExpr) to correctly identify data items. If **valueExpr** is not specified, the component compares object references to display an item, not object values. For instance, if you define the **value** property as an object containing identical values to **dataSource** to select all items, the component displays nothing.

[note] If you synchronize **value** with the embedded component's **selectedRowKeys**/**selectedItemKeys** property (for instance, [DataGrid.selectedRowKeys](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#selectedRowKeys)), ensure the type of **value** matches the **selectedRowKeys**/**selectedItemKeys** type (such as [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)).

#####See Also#####
- [DropDownBox - Synchronize with the Embedded Element](/Documentation/Guide/UI_Components/DropDownBox/Synchronize_with_the_Embedded_Element/)