---
default: undefined
type: Array<any> | DataSource_Options
---
---
##### shortDescription
Specifies the lookup data source.

---
- **Array of Objects**       
A simple JavaScript array containing a collection of plain objects.

- [**DataSource Configuration Object**](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')       
The [DataSource's](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') configuration object. Learn more about the **DataSource** and the DevExtreme Data Layer concept from the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') topic.

    [note] When using a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') for the lookup data source, you must implement the [load](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/load.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load') and [byKey](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration/byKey.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey') functions.

The lookup data source must contain fields assigned to the [valueExpr](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/lookup/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/lookup/#valueExpr') and [displayExpr](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/lookup/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/lookup/#displayExpr') options.

#####See Also#####
- [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/')