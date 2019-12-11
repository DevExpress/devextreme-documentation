---
type: Array<any> | DataSource | DataSource_Options | String
---
---
##### notUsedInTheme

##### shortDescription
Specifies the widget's data origin.

---
This option accepts one of the following:

- **Array of objects**      
 A simple JavaScript array containing a collection of plain objects.

- **URL**       
 A URL to JSON data or a service returning data in JSON format.

- **[DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')**      
 A **DataSource** is an object that provides an API for data processing. Learn more about it from the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer') and [DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples') guides.

    [note]Turn the **DataSource**'s [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') off to prevent data from partitioning.

#include widgets-ref-datasource-fieldname-note

#####See Also#####
- [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/argumentField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#argumentField') | [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#valueField') | [colorField](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/colorField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#colorField')
- [getDataSource()](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/3%20Methods/getDataSource().md '{basewidgetpath}/Methods/#getDataSource')