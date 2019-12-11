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
 A simple JavaScript array containing a collection of plain objects. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleArray/jQuery/Light).

- **URL**       
 A URL to JSON data or a service returning data in JSON format. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/jQuery/Light).

- **[DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')**      
 A **DataSource** is an object that provides an API for data processing. Learn more about it from the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer') and [DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples') guides. See [demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light).

    [note]Turn the **DataSource**'s [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') off to prevent data from partitioning.

#include widgets-ref-datasource-fieldname-note

#####See Also#####
- [argumentField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/argumentField.md '{basewidgetpath}/Configuration/series/#argumentField') | [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueField.md '{basewidgetpath}/Configuration/series/#valueField')
- [getDataSource()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getDataSource().md '{basewidgetpath}/Methods/#getDataSource')