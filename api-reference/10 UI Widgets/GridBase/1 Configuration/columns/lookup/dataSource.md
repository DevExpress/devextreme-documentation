---
default: undefined
type: Array<any> | DataSource_Options | Store | function(options)
---
---
##### shortDescription
Specifies the data source for the lookup column.

##### param(options): Object
Information on the current row.

##### field(options.data): Object
The row's data.

##### field(options.key): any
The row's key.

##### return: Array<any>|DataSource_Options|Store
An array of data objects, a store instance, or a **DataSource** configuration.

---
This option accepts one of the following:

- **Array of Objects**       
A simple JavaScript array containing a collection of plain objects.

- [**DataSource Configuration Object**](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')       
A **DataSource** configuration object. See [Bind a Lookup Column to a Custom Data Source](/concepts/05%20Widgets/DataGrid/99%20How%20To/Bind%20a%20Lookup%20Column%20to%20a%20Custom%20Data%20Source.md '/Documentation/Guide/Widgets/{WidgetName}/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/').

- **Store instance**     
An [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/'), [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'), or [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') instance.

- **Function**      
A function that returns an array of objects, a store instance, or a **DataSource** configuration object.

The lookup data source should contain fields assigned to the [valueExpr](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup/valueExpr.md '{basewidgetpath}/Configuration/columns/lookup/#valueExpr') and [displayExpr](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup/displayExpr.md '{basewidgetpath}/Configuration/columns/lookup/#displayExpr') options.