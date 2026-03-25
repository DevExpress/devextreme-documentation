---
id: dxDropDownBox.Options.value
type: any
default: null
---
---
##### shortDescription
Specifies the selected value. This can be an object if [dataSource]({basewidgetpath}/Configuration/#dataSource) contains objects, the store [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') is specified, and [valueExpr]({basewidgetpath}/Configuration/#valueExpr) is not set.

---
When [dataSource]({basewidgetpath}/Configuration/#dataSource) contains objects, define [valueExpr]({basewidgetpath}/Configuration/#valueExpr) to identify data items correctly. If **valueExpr** is not specified, the component compares object references instead of object values to determine which item to display. For example, if you set the **value** property to an object whose values match those in **dataSource** to select all items, the component does not display anything.

[note] If you synchronize **value** with the embedded component's **selectedRowKeys**/**selectedItemKeys** property (for instance, [DataGrid.selectedRowKeys](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#selectedRowKeys)), ensure the **value** type matches the **selectedRowKeys**/**selectedItemKeys** type (such as [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)).

#####See Also#####
- [DropDownBox - Synchronize with the Embedded Element](/Documentation/Guide/UI_Components/DropDownBox/Synchronize_with_the_Embedded_Element/)