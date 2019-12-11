---
default: undefined
type: Array | DataSource_Options | function(options)
---
---
##### shortDescription
Specifies the data source for the lookup column.

##### param(options): Object
The settings of a row.

##### field(options.data): Object
The data of the row.

##### field(options.key): any
The key value of the row.

##### return: Array|DataSource_Options
An array of data objects or a **DataSource** configuration object.

---
This option accepts one of the following.

- **Array of Objects**       
A simple JavaScript array containing a collection of plain objects.

- [**DataSource Configuration Object**](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')       
A configuration object of the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). Learn more about the **DataSource** and the DevExtreme Data Layer concept from the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') topic.

    [note] When using a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') for the lookup data source, you are required to implement the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') and [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') functions.

- **Function**      
A function that returns either an array of objects or a **DataSource** configuration object.

The lookup data source must contain fields assigned to the [valueExpr](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup/valueExpr.md '{basewidgetpath}/Configuration/columns/lookup/#valueExpr') and [displayExpr](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup/displayExpr.md '{basewidgetpath}/Configuration/columns/lookup/#displayExpr') options.

#####See Also#####
- [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/')